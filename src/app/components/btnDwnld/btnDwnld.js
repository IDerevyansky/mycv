import dataMenu from "@/app/lib/menu.json"
import DATA from "@/app/lib/cv.json"
import { saveAs } from "file-saver";
import './btnDwnld.css'

export default function BtnDwnld(position){

    let DownloadBtn = dataMenu.btn;
    // have a param 'position'
    // DownloadBtn - position button in menu
    // DownloadBtnPopUp - position button in pop up menu

    const saveFile = () => {
        saveAs(
          DATA.personInfo.cvLink,
          "Igor_Derevianskii_CV.pdf"
        );
      };

    return(

        <button onClick={saveFile} className={position.position}> 
            <p>{DownloadBtn.name}</p>
        </button>

    )
}