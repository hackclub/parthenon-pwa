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

    var elements = []

    for (let i = 0; i < GoddessList.length; i++) {
      if (GoddessList[Number(list[i])-1]==this_goddess) {
        elements.push(<LeaderboardSlot isGlowing="true" object={GoddessList[Number(list[i])-1]} points={respectivepoints[i]}/>);
      } else {
        elements.push(<LeaderboardSlot isGlowing="false" object={GoddessList[Number(list[i])-1]} points={respectivepoints[i]}/>);
      }
    }

    return (
        <div className="grid gap-4">
        {elements}
      </div>
    )
  }