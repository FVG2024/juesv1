import datetime
from typing import Dict, List, Optional

from caliban.platform.gke import util
from caliban.platform.gke.types import GKECluster, GKEMachineType, GKENodeImage


def _cluster_name(cluster: GKECluster) -> str:
  """Generates a unique name for a GKE cluster."""
  return f"caliban-{cluster.name}-{datetime.datetime.now():%Y%m%d%H%M%S}"


def launch(
    cluster: GKECluster,
    machine_type: GKEMachineType,
    node_image: GKENodeImage,
    accelerator_count: int,
    accelerator_type: str,
    preemptible: bool,
    zone: str,
    project_id: str,
    extra_data: Optional[Dict[str, str]] = None,
) -> Dict[str, any]:
  """Launches a GKE cluster with the specified configuration."""
  cluster_name = _cluster_name(cluster)
  return util.run_gcloud_command(
      [
          "container",
          "clusters",
          "create",
          cluster_name,
          f"--project={project_id}",
          f"--zone={zone}",
          f"--machine-type={machine_type.value}",
          f"--image-type={node_image.value}",
          f"--num-nodes={cluster.node_count}",
          f"--accelerator=type={accelerator_type},count={accelerator_count}",
          "--preemptible" if preemptible else "",
      ],
      extra_data=extra_data,
  )
