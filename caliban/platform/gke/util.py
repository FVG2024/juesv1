import subprocess
from typing import List


def run_gcloud_command(
    command: List[str], extra_data: Optional[Dict[str, str]] = None
) -> Dict[str, any]:
  """Runs a gcloud command and returns the JSON output."""
  if extra_data:
    labels = ",".join(f"{k}={v}" for k, v in extra_data.items())
    command.append(f"--labels={labels}")

  command = ["gcloud"] + command + ["--format=json"]
  result = subprocess.run(command, capture_output=True, text=True)
  result.check_returncode()
  return json.loads(result.stdout)
