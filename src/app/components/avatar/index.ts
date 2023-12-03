import "./avatar.scss";
import {Indexed} from "@core/types/indexed.type.ts";
import {UserType} from "@core/types/user.type.ts";
import connector from "@data/store/connector.ts";
import backendConfig from "@/backend.config.ts";
import Avatar from "@components/avatar/avatar.comp.ts";



const avatarMapper = (state: Indexed) => {
    return { src: `${backendConfig.resourses}/${(state.user as UserType).avatar}` };
}

const connected = connector(Avatar, avatarMapper);

export default connected;
