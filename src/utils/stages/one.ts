import { StageTwoMenu } from "../persistent_menu";
import { title_arr } from "../requests/POST";
import sendData from "../sendData/send";
import startingStage from "./starting";

const stageOne = async (sender_id: string, title: string) => {
  const index = title_arr.map((e) => e.user_id).indexOf(sender_id);
  console.log(index);
  const arr = title_arr[index].arr;

  if (title == "Discord Bot") {
    StageTwoMenu(sender_id);
    arr.push(title);

    const msg: string =
      "Welcome to Discord Bot Guild.\n" +
      "I will guild step-by-step to create your Discord Bot.\n\n" +
      "First, follow this link (https://j2c.cc/deploybot)\n" +
      "The password for the link is DiscordBot";

    await sendData(sender_id, msg);
  } else if (title === "Messenger Bot") {
    await sendData(
      sender_id,
      "Sorry, this function is currently in development."
    );
  } else if (title == "Go back") {
    arr.pop();
    await startingStage(sender_id);
  }

  title_arr[index].arr = arr;
};

export default stageOne;
