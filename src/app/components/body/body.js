import Link from 'next/link';
import "./body.css"


export default function Body(props){

    const DATA = props.data;

function Experience(q, id){
    return(

    <div key={id} className='expBox'>
        <div className='company-position-dateExp'>
                <div className='company-positionExp'>
                <div className='companyExp'><h3><u><Link href={q.company.link} target="_blank">{q.company.name}</Link></u></h3></div>
                <div className='positionExp'><h3>{q.position}</h3></div>
            </div>
                <div className='dateExp'><h4>{q.date}</h4></div>
        </div>
        <div className='descriptionExp'><p dangerouslySetInnerHTML={{__html:q.description}}></p></div>
    </div>
        
    )
}



    return(

        <div className="bodyMainContainer">

            <div className="bodyContainer">


                <div className='personalInfoBox'>
                    <h1>{DATA.personInfo.name}</h1>
                    <div className='contactInf'>
                        <Link href={"mailto:"+DATA.personInfo.mail}>{DATA.personInfo.mail}</Link>
                        <Link href={"tel:"+DATA.personInfo.phone}>{DATA.personInfo.phone}</Link>
                        <p>{DATA.personInfo.address}</p>
                    </div>
                </div>

                {/*  -------------------------- Skills -------------------------- */}
                <div className='block'>

                    <div className='title'>
                        <h2>{DATA.skills.title}</h2>
                    </div>
                    <div className='expBox'>


                        {/* {
                           

                            DATA.skills.list.map((item, key, array)=>{
                                
                                console.log( )
                                return(
                                    <p key={key}><strong>{item.title}</strong>

                                        {

                                            item.list ? item.list + ", " : item.list + "."
                                        
                                        }
                                    
                                    </p>
                                )
                                
                            })

                        } */}





                        <p><strong>{DATA.skills.list[0].title}</strong>{
                            DATA.skills.list[0].list.map((item, key, array)=>(
                                
                            key < array.length - 1? item + ", " : item + "."  

                            ))
                        }</p>
                        <p><strong>{DATA.skills.list[1].title}</strong>{
                            DATA.skills.list[1].list.map((item, key, array)=>(
                                
                            key < array.length - 1? item + ", " : item + "."  

                            ))
                        }</p>
                          <p><strong>{DATA.skills.list[2].title}</strong>{
                            DATA.skills.list[2].list.map((item, key, array)=>(
                                
                            key < array.length - 1? item + ", " : item + "."  

                            ))
                        }</p>



                    </div>

                </div>

                {/*  -------------------------- Experience -------------------------- */}
                <div className="block">
                    <div className='title'>
                        <h2>{DATA.experience.title}</h2>
                    </div>
                    
                    {
                        DATA.experience.list.map((item, key)=>(
                            Experience(item, key)
                        ))
                    }

                </div>
                {/*  -------------------------- Education -------------------------- */}
                <div className="block">
                    <div className='title'>
                        <h2>{DATA.education.title}</h2>
                    </div>

                    <div className='eduBox'>
                        <div className='leftSideEdu'>
                            <h3>{DATA.education.name}</h3>
                            <p><span className='fontEdu'>{DATA.education.degree}</span> | {DATA.education.specialisation}</p>
                        </div>
                        <div className='rightSideEdu'>
                        <h4>{DATA.education.date}</h4>
                        </div>
                    </div>
                    
                

                </div>
                {/*  -------------------------- licensesCertifications -------------------------- */}
                <div className="block">
                    <div className='title'>
                        <h2>{DATA.licensesCertifications.title}</h2>
                    </div>
                    <div className='eduBox'>
                        <div className='leftSideEdu'>
                            <Link href={DATA.licensesCertifications.link} target="_blank"><h3><u>{DATA.licensesCertifications.name}</u></h3></Link>
                        </div>
                        <div className='rightSideEdu'>
                        <h3>{DATA.licensesCertifications.teacher}</h3>
                        </div>
                    </div>


                </div>
               

            </div>

        </div>

    )
}