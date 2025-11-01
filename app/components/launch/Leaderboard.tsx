import { getListAndPoints } from '@/app/airtable';
import LeaderboardSlot from '@/app/components/launch/LeaderboardSlot';
import Goddess, { GoddessList } from '@/app/components/launch/GoddessInfo';
var list = [""];
var respectivepoints = [""];

interface LeaderboardProps {
    this_goddess: Goddess,
  }

export default async function Leaderboard({ this_goddess }: LeaderboardProps) {
    const { rank_list, points_list } = await getListAndPoints();
    list = rank_list;
    respectivepoints = points_list;
    console.log("list =", list)
    console.log("points =",respectivepoints)

    var elements = []

    for (let i = 0; i < 10; i++) {
      if (GoddessList[Number(list[i])-1]==this_goddess) {
        console.log(GoddessList[Number(list[i])-1], "is", this_goddess)
        elements.push(<LeaderboardSlot isGlowing="true" object={GoddessList[Number(list[i])-1]} points={respectivepoints[i]}/>);
      } else {
        console.log(GoddessList[Number(list[i])-1], "is not", this_goddess)
        elements.push(<LeaderboardSlot isGlowing="false" object={GoddessList[Number(list[i])-1]} points={respectivepoints[i]}/>);
      }
    }

    return (
        <div className="grid gap-4">
        {elements}
      </div>
    )
  }