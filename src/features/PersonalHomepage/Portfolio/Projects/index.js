import { Error } from "./Error";
import { Loading } from "./Loading";
import { Repo } from "./Repo";

export const Projects = ({ status, repositories }) => {
    switch (status) {
        case "":
            return [];

            case "loading":
                return <Loading />

                case "error":
                    return <Error />

                    case "success":
                        return <Repo repositories={repositories} />

                    default:
                        throw new Error(`incorrect status: ${status}`)
    }
}