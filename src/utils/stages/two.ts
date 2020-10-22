import { StageThreeMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import stageOne from "./one";

const stageTwo = (sender_id: String, title: String) =>
{
    const index = title_arr.map(e => e.user_id).indexOf(sender_id);
    let arr = title_arr[index].arr;

    arr.push(title);
    if (title === "I have pressed Deploy to Heroku")
    {
        StageThreeMenu(sender_id);

        sendData(sender_id, "Now, you will see a tab popped up. There will be a space for you to fill your bot's back-end name, go ahead and do it !");
    }
    else if (title == "Go back")
    {
        arr.pop();
        arr.pop();
        stageOne(sender_id, arr[-1]);
    }

    title_arr[index].arr = arr;
}

export default stageTwo;