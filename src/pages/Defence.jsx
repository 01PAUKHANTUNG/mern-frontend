import React from 'react'
import DepartmentTitle from '../components/DepartmentTitle'
import GalHangte from '../components/Galhangte.jsx'
import flag from '../assets/Zoland pdf-02_edited.jpg'
import munlakna from '../assets/Defence/333494159_254799560208070_3931187460287672509_n.jpg'
import dron1 from '../assets/Defence/Drone/315543304_223389900023438_6275281094286323886_n.jpg'
import dron2 from '../assets/Defence/Drone/314673031_222954703400291_5412532834092825158_n.jpg'
import dron3 from '../assets/Defence/Drone/359441125_322526453443115_6500739263531596502_n.jpg'
import dron4 from '../assets/Defence/Drone/314615995_222954650066963_3603810110688157171_n.jpg'
import Title from '../components/Title.jsx'
import conference from '../assets/Defence/conference/441461256_751643440488776_5772718796697572703_n.jpg'
import milestones1 from '../assets/Defence/activity tuamtuam/487526299_705595745136182_822495619440972550_n.jpg'
import milestones2 from '../assets/Defence/activity tuamtuam/339127226_771915914128748_4349021520101554706_n.jpg'
import milestones3 from '../assets/Defence/activity tuamtuam/338587341_3315291558692719_4661475132256111370_n.jpg'
import milestones4 from '../assets/Defence/activity tuamtuam/457614190_558477826514642_2495112862251246982_n.jpg'


const Defence = () => {
 

  return (
    <div className=''>
       <div >
          <DepartmentTitle title='DEPARTMENT OF DEFENCE' />
       </div>

       <div className='w-[100%] '>
         <div className='flex flex-col sm:flex-row w-[80%] mx-auto py-5 sm:py-10'>
           <div className='sm:hidden flex w-[50%] justify-center mx-auto py-5 sm:py-10'>
              <img src={flag} className='w-[80%]' alt='' />
           </div>
         <div className='flex flex-col gap-5 sm:gap-10 sm:w-[50%] justify-center '>
          <p className='text-xl sm:text-3xl font-semibold '>MIPI GALKAP KICIAM LUNGTUP</p>
          <p>1. Eite in gambup le gam minamte tungah i thuman ding hi.</p>
          <p>2. Eite in belpawl, liangko kikim, nintakna beilawh galhangte' tungah i thuman ding hi.</p> 
          <p>3. Eite in mipite' nuntakna, inn le lote bit takin kem dingin i kiciam hi.</p>
         </div>
         <div className='hidden sm:flex sm:w-[50%] justify-center'>
              <img src={flag} className='w-[30%]' alt='' />
         </div>
        </div>
       </div>

       <div className='w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 sm:gap-10 w-[80%] mx-auto'>
           
            <p className='text-xl sm:text-3xl font-semibold'>ZFU/PDF ZOLAND GALKAP TUM THAK DINGTE' ZUIHDING THUKHUN</p>
            <p>1.PDF Zoland ah galkap tum ding mi khatin ZFU/PDF Zoland kipawlna i gamvai, galvai thu bullette a sangzo mi hi ding hi.</p>

            <p>2.PDF Zoland galkap tum thak ding mi khatin a tawm pen kum khat sem ding a, PDF Zoland i vaipuak piakna munmun ah asem zo mi hi ding hi.</p>

            <p>3.PDF Zoland galkap tum ding mi khatin tungsiah thupiakna bangin a zui zo mi hi ding hi.</p>

            <p>4.PDF Zoland galkap tum ding mi khatin atawm pen kum (18) pha khinsa hi ding hi.</p>

            <p>5.PDF Zoland galkap tum nuam mikhat kum cing nailo ahih leh nulepa, sanggam ulenau khatpeuh i theihpihna kisam ding hi.</p>

            <p>6.PDF Zoland galkap tum ding mi khatin a cidam mi hi ding hi.</p>

            <p>7.PDF Zoland galkap tum ding mi khatin minam, biakna, party, pauleham, khualetui a deidan lomi hi ding hi.</p>

            <p>8.PDF Zoland galkap tum ding mi khatin midang khat, kipawlna khat peuh i zawhthawh thutawh lut hilo a, mimal khentatna kizawhna tawh alut mi hi ding hi.</p>
         </div>
       </div>

       <div className='w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 sm:gap-10 w-[80%] mx-auto'>
            <p className='text-xl sm:text-3xl font-semibold'> PDF ZOLAND SECTORS</p>
            <p>Logistics (ထောက်ပို့) </p>

            <p>Training (လေ့ကျင့်ရေး) </p>

            <p>Production (ထုပ်လုပ်ရေး) </p>

            <p>Drone (ဒရုန်း) </p>

            <p>Intelligence (ထောက်လှမ်းရေး) </p>

            <p>Public Affairs (ပြန်ကြားရေးနှင့် လူထုဆက်ဆံရေး) </p>

            <p>Disciplinary Force (စည်းကမ်းထိန်းသိမ်းရေး) </p>
         </div>
       </div>

        <div className='w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 sm:gap-10 w-[80%] mx-auto'>
            <p className='text-xl sm:text-3xl font-semibold'>2023 SUNG NASEPNATE </p>
            <p>Training 4 vei </p>

            <p> မွမ်းမံ သင်တန်း 3 vei</p>

            <p>Chin State pua lam ERO te ah training 3 vei ki pai thei hi. </p>

         </div>
       </div>

       
        <div className='flex flex-col gap-10 w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 sm:gap-10 w-[80%] mx-auto'>
           <p className='text-xl sm:text-3xl font-semibold'> GALKUANNA (MISSIONS) </p>
            <p> Mission 14 vei </p>

            <p> Galhuh 5 vei </p>

            <p> March kha in Tedim Zatopi ah giah phualsat galkapte ki hawlkhia </p>

            <p> September kha in Tedim pan palik 4 ki hingmat </p>

            <p> November kha in Thuamvum (Kennedy mual) la-in သုံ့ပန်း 2 ki hingmat a galvan pawlkhat kingah hi. </p>
 
            <p> SAC Kumpi zum mawtaw nih nasepna ah zat dingin kila hi. </p>
         </div>
         <div className='w-[80%] mx-auto'>
            <img src={munlakna} alt='' />
         </div>
       </div>

       <div className='flex flex-col gap-10 w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 sm:gap-10 w-[80%] mx-auto'>
            
               <p className='text-xl sm:text-3xl font-semibold'>KHUALZITNA </p>
               <p>Health, Education, PPF le ZFU department dangte tawh khualzin khopna ki nei zel in security ki sepsak hi. </p>

               <p>Tedim le Tonzang gamhuam ah 4 vei စည်းရုံးရေး နယ်ဆင်း kipai hi. </p>
         </div>
       </div>

        <div className='flex flex-col gap-10 w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 sm:gap-10 w-[80%] mx-auto'>
            
               <p className='text-xl sm:text-3xl font-semibold'>ALLIANCE TE TAWH KIZOPNA </p>
                
               <p>ERO pawlkhat tawh kizopna kilam thei hi. Amau tungtawnin van, idea le training te kisang zel hi.</p>

               <p>Mindat CDF le Falm CNDF tawh alliance ciang hi loin, a kho mahmah kizopna (ချင်းညီနောင်) kilam thei hi.</p>

               <p>National Unity Government, Ministry of Defence (MOD) gelna KIA te makaihna ahi kawlpi huam galvai nasepnate ah thaneihzah in kihel hi hang.</p>

               <p>Thado Defence Army (TDA) leh kimlepam a om PDF, CDF tuamtuamte tawh kizopna hoih kilam thei hi.</p>
         </div>
       </div>

         <div className='flex flex-col gap-5 sm:gap-10 w-[100%] '>
         <div className='flex flex-col gap-5 sm:gap-10 w-[80%] mx-auto'>           
               <p className='text-xl sm:text-3xl font-semibold'>CHIN STATE SUNG PANMUN LAKNA</p>
               <p>CJDC pen December 15 ni in kibei sak a, a tawp dongin Vice President dinmun kila hi.</p>
               <p>ICNCC Defence Committee ah zong Vice president dinmun a kilet laitak hi.</p>
         </div>
         </div>

       <div className=''>
          <GalHangte />
       </div>

       <div className='w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 w-[80%] mx-auto'>
            <Title title="Drone Team" />
            <div>
               <img src={dron1} alt='' />
            </div>
            <div className='flex  flex-col sm:flex-row gap-4 '>
                 <img src={dron2} className='w-[400px] h-[400px]' alt='' />
                  <img src={dron3} className='w-[400px]  h-[400px]' alt='' />
                 <img src={dron4} className='w-[390px]  h-[400px]' alt='' />
            </div>
         </div>
       </div>

       <div className='w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 w-[80%] mx-auto'>
            <Title title="Conference" />
            <div>
               <img src={conference} alt='' />
            </div>  
         </div>
       </div>

       <div className='w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 w-[80%] mx-auto'>
            <Title title="Celebrating Milestones" />
            <div className='flex flex-col sm:flex-row gap-4 '>
               <img src={milestones1} className='w-[600px] h-[300px] sm:h-[400px]' alt='' />
               <img src={milestones2} className='w-[600px] h-[300px] sm:h-[400px]' alt='' />
            </div>
            <div className='flex flex-col sm:flex-row gap-4  '>
                 <img src={milestones3} className='w-[600px] h-[300px] sm:h-[450px]' alt='' />
                  <img src={milestones4} className='w-[600px] h-[300px] sm:h-[450px]' alt='' />
                 
            </div>
         </div>
       </div>

       <div className='w-[100%] py-5 sm:py-10'>
         <div className='flex flex-col gap-5 sm:gap-10 w-[80%] mx-auto'>
            <p className='text-xl sm:text-3xl font-semibold'>Alliances </p>
            <p>1. Chin Brotherhood (CB) </p>

            <p>2. Chin Defense Force -Mindat </p>

            <p>3. Chin Defense Force -Kanpatlet </p>

            <p>4. CNO/Chin National Defense Force </p>

            <p>5. Chinland Defence Force -Matupi (Brigade 1) </p>

            <p>6. Mara Defence Force (MDF) </p>

            <p>7. Thado Defence Army </p>
         </div>
       </div>

    </div>
  )
}

export default Defence
