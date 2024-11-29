import LabItems from "./LabItem.tsx";
import {useEffect, useState} from "react";
import api from "../../configs/axios.config.tsx";
import {GET_LAB_URL} from "../../configs/Api.config.tsx";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

interface LabData {
    id: number;
    username: string;
    startDate: string;
    endDate: string;
    status: number;
}


const LabTable = () => {
  const [labData, setLabData] = useState<LabData[]>([]);
  const navigation = useNavigate();

  const getLabData = async () => {
    try {
      const response = await api.get(GET_LAB_URL);
      if (response.status === 200) {
        setLabData(response.data);
      }
    }
    catch (error) {
      console.error("Error", error);
      toast.error("Forbidden Error");
      navigation("/forbidden");
    }
  }


  useEffect(() => {


    getLabData();
  }, []);

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="text-center py-1 px-2">
              ID
            </th>
            <th scope="col" className="text-center py-1 px-2">
              Người mượn
            </th>
            <th scope="col" className="text-center py-1 px-2">
              Role
            </th>
            <th scope="col" className="text-center py-1 px-2">
              Status
            </th>
            <th scope="col" className="py-1 px-2 text-center">
              Ngày mượn - Kết thúc
            </th>
            <th scope="col" className="py-1 px-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {labData.length>0?labData.map((item) => (
              <LabItems
                  key={item.id}
                  id={item.id}
                  username={item.username}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  status={item.status}
                  onApprove = {getLabData}
              />
          )): <tr>
            <td colSpan={6} className="text-center py-4">No data</td>
            </tr>}
        </tbody>
      </table>
    </div>
  );
};

export default LabTable;
