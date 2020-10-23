import { StageFourMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageOne from "./one";

const stageThree = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    if (title == "Named it")
    {
        StageFourMenu(sender_id);
        arr.push(title);

        const msg: String = "Great!\n" +
        "Let's go to the Settings tab. Under it, you will see a button called Reveal Config Vars in section Config Vars. Press it!";

        await sendData(sender_id, msg);
    }
    else if (title == "Go back")
    {        
        arr.pop()
        const req = arr[arr.length - 1];
        await stageOne(sender_id, req);
    }

    title_arr[index].arr = arr;
}

export default stageThree;