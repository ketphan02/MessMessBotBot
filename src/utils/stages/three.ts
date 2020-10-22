import { StageFourMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageTwo from "./two";

const stageThree = async (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "Named it")
    {
        StageFourMenu(sender_id);

        await sendData(sender_id, "Great !");
        await sendData(sender_id, "Let's go to the Settings tab. Under it, you will see a button called Reveal Config Vars in section Config Vars. Press it !");
    }
    else if (title == "Go back")
    {
        arr.pop();
        arr.pop();
        await stageTwo(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageThree;