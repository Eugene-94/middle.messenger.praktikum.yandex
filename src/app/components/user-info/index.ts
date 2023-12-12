import { Indexed } from "@core/types/indexed.type.ts";
import connector from "@data/store/connector.ts";
import UserInfoComponent from "@components/user-info/user-info.comp.ts";



const userInfoMapper = (state: Indexed): Indexed => {
    return { userInfo: state.user };
}

export default connector(UserInfoComponent, userInfoMapper);
