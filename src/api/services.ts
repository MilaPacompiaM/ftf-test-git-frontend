import { Commit } from "../page/commits/Commits.interface";
import { get } from "./client"
import { ServicePaths } from "./constants"

export const GetAllCommits = async (): Promise<Array<Commit>> => {
  const { response } = await get(ServicePaths.ALL_COMMITS);
  const data = response.data as unknown
  return data as Array<Commit>;
}
