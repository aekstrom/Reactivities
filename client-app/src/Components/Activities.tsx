import { useEffect, useState } from "react";
import fetchData from "../Api/Fetch";

type ActivityType = {
  id: string,
  title: string
};

const EmptyActivity: Array<ActivityType> = [];

export default function Activities() {
  const [activities, setData] = useState(EmptyActivity);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const result = await fetchData<ActivityType[]>('http://localhost:5000/api/activities');
        setData(result);
      } catch (error) { setData(EmptyActivity); }
    }
    fetchActivities();
  }, []);

  return (
    <>
      <div>
        {activities.map(a => {
          return (
            <p key={a.id} >{a.title}</p>)
        })}
      </div>
    </>
  );
}