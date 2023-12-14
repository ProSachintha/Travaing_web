
       
       function one(){
           
        localStorage.setItem('provings',"EASTERN PROVINGS");

        localStorage.setItem('distric1',"TRINKOMALI");
        localStorage.setItem('distric2',"BATTICALOA");
        localStorage.setItem('distric3',"AMPARA");
        localStorage.removeItem('distric4');
        localStorage.removeItem('distric5');

        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'TRINCO.';

       localStorage.setItem('d1place1',"KONESHWARAM TEMPLE");
       localStorage.setItem('d1place2',"NILAVELI BEACH");
       localStorage.setItem('d1place3',"SERUWILA RAJA MAHA VIHARAYA");
       localStorage.setItem('d1place4',"PIGEON ISLAND NATIONAL PARK");
       localStorage.setItem('d1place5',"VELGAMA VEHERA");

       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'KONESHWARAM TEMPLE.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'NILAVELI BEACH.';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       'SERUWILA RAJA MAHA VIHARAYA.';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       'PIGEON ISLAND NATIONAL PARK.';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       'VELGAMA VEHERA.';

       
       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'BATTICALOA.';

       localStorage.setItem('d2place1',"BATTICALOA LIGHTHOUSE");
       localStorage.setItem('d2place2',"PASIKUDA BEACH");
       localStorage.setItem('d2place3',"BATTICALOA LAGOON");
       localStorage.setItem('d2place4',"BATTICALOA FORT");
       localStorage.setItem('d2place5',"ST MARYS CATHEDRAL");

       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'BATTICALOA LIGHTHOUSE.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'PASIKUDA BEACH.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       'BATTICALOA LAGOON.';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       'BATTICALOA FORT.';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       'ST MARYS CATHEDRAL.';


       const ans3 = document.querySelector('#dthree');
        ans3.textContent =
       'AMPARA.';

       localStorage.setItem('d3place1',"BUDDHANGALA MONASTERY");
       localStorage.setItem('d3place2',"ARUGAM BAY BEACH");
       localStorage.setItem('d3place3',"POTTUVIL POINT");
       localStorage.setItem('d3place4',"KUMANA NATIONAL PARKT");
       localStorage.setItem('d3place5',"GALOYA NATIONAL PARK");

       const d3ans1 = document.querySelector('#d3place1');
        d3ans1.textContent =
       'BUDDHANGALA MONASTERY.';
       const d3ans2 = document.querySelector('#d3place2');
        d3ans2.textContent =
       'ARUGAM BAY BEACH.';
       const d3ans3 = document.querySelector('#d3place3');
        d3ans3.textContent =
       'POTTUVIL POINT.';
       const d3ans4 = document.querySelector('#d3place4');
        d3ans4.textContent =
       'KUMANA NATIONAL PARK.';
       const d3ans5 = document.querySelector('#d3place5');
        d3ans5.textContent =
       'GALOYA NATIONAL PARK.';

       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="visible";
       document.getElementById("city4").style.visibility="hidden";
       document.getElementById("city5").style.visibility="hidden";
       document.getElementById("msg").style.visibility="hidden";

       localStorage.removeItem('d4place1');
       localStorage.removeItem('d4place2');
       localStorage.removeItem('d4place3');
       localStorage.removeItem('d4place4');
       localStorage.removeItem('d4place5');

       localStorage.removeItem('d5place1');
       localStorage.removeItem('d5place2');
       localStorage.removeItem('d5place3');
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');
    }

    function two(){

     localStorage.setItem('provings',"NORTHERN PROVINGS");

        localStorage.setItem('distric1',"VAVUNIYA");
        localStorage.setItem('distric2',"MULLATIVU");
        localStorage.setItem('distric3',"MANNAR");
        localStorage.setItem('distric4',"MANNAR");
        localStorage.setItem('distric5',"KILINOCHCHI");
    
        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'VAVUNIYA.';

       localStorage.setItem('d1place1',"MADUKANDA TEMPLE");
       localStorage.setItem('d1place2',"JETHAWANARAMAYA");
       localStorage.setItem('d1place3',"MIHINTHALE PEAK");
       localStorage.setItem('d1place4',"WASAMUWA NATIONAL PARK");
       localStorage.setItem('d1place5',"ISINBASSAGALA VEHERA");

       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'MADUKANDA TEMPLE.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'JETHAWANARAMAYA.';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       'MIHINTHALE PEAK.';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       'WASAMUWA NATIONAL PARK.';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       'ISINBASSAGALA VEHERA.';


       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'MULLATIVU.';

       localStorage.setItem('d2place1',"MULLATIVU BEACH");
       localStorage.setItem('d2place2',"WAR MUSEUM");
       localStorage.setItem('d2place3',"HIJACKED SHIP");
       localStorage.setItem('d2place4',"LTTE SECRET SUBMARINES");
       localStorage.removeItem('d2place5');

       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'MULLATIVU BEACH.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'WAR MUSEUM.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       'HIJACKED SHIP.';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       'LTTE SECRET SUBMARINES.';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       '';
       



       const ans3 = document.querySelector('#dthree');
        ans3.textContent =
       'MANNAR.';

       localStorage.setItem('d3place1',"THANTHIRIMALE");
       localStorage.setItem('d3place2',"MANNAR ISLAND");
       localStorage.setItem('d3place3',"MADHU CHURCH");
       localStorage.setItem('d3place4',"MANNAR FORT");
       localStorage.setItem('d3place5',"YODA WEWA");

       const d3ans1 = document.querySelector('#d3place1');
        d3ans1.textContent =
       'THANTHIRIMALE.';
       const d3ans2 = document.querySelector('#d3place2');
        d3ans2.textContent =
       'MANNAR ISLAND.';
       const d3ans3 = document.querySelector('#d3place3');
        d3ans3.textContent =
       'MADHU CHURCH.';
       const d3ans4 = document.querySelector('#d3place4');
        d3ans4.textContent =
       'MANNAR FORT.';
       const d3ans5 = document.querySelector('#d3place5');
        d3ans5.textContent =
       'YODA WEWA.';


       const ans4 = document.querySelector('#dfore');
        ans4.textContent =
       'KILINOCHCHI.';

       localStorage.setItem('d4place1',"LUMBINI VIHARAYA");
       localStorage.setItem('d4place2',"IRANAMADU TANK");
       localStorage.setItem('d4place3',"PKANDASAMI TEMPLET");
       localStorage.setItem('d4place4',"MURUKANDY PILLEYAR KOVIL");
       localStorage.removeItem('d4place5');

       const d4ans1 = document.querySelector('#d4place1');
        d4ans1.textContent =
       'LUMBINI VIHARAYA.';
       const d4ans2 = document.querySelector('#d4place2');
        d4ans2.textContent =
       'IRANAMADU TANK.';
       const d4ans3 = document.querySelector('#d4place3');
        d4ans3.textContent =
       'PKANDASAMI TEMPLET.';
       const d4ans4 = document.querySelector('#d4place4');
        d4ans4.textContent =
       'MURUKANDY PILLEYAR KOVIL.';
       const d4ans5 = document.querySelector('#d4place5');
        d4ans5.textContent =
       '';
       


       const ans5 = document.querySelector('#dfive');
        ans5.textContent =
       'JAFFNA.';

       localStorage.setItem('d5place1',"KANDARODI TEMPLE");
       localStorage.setItem('d5place2',"JAFFNA FORT");
       localStorage.setItem('d5place3',"NALLUR TEMPLE");
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');

       const d5ans1 = document.querySelector('#d5place1');
        d5ans1.textContent =
       'KANDARODI TEMPLE.';
       const d5ans2 = document.querySelector('#d5place2');
        d5ans2.textContent =
       'JAFFNA FORT.';
       const d5ans3 = document.querySelector('#d5place3');
        d5ans3.textContent =
       'NALLUR TEMPLE.';
       const d5ans4 = document.querySelector('#d5place4');
        d5ans4.textContent =
       '';
       const d5ans5 = document.querySelector('#d5place5');
        d5ans5.textContent =
       '';
       


       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="visible";
       document.getElementById("city4").style.visibility="visible";
       document.getElementById("city5").style.visibility="visible";
       document.getElementById("msg").style.visibility="hidden";

       
    }

    function three(){

     localStorage.setItem('provings',"NORTHERN PROVINGS");

        localStorage.setItem('distric1',"PUTHTHALAMA");
        localStorage.setItem('distric2',"KURUNEGALA");
        localStorage.removeItem('distric3');
        localStorage.removeItem('distric4');
        localStorage.removeItem('distric5');
        
        
        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'PUTHTHALAMA.';

       localStorage.setItem('d1place1',"KALPITIYA DIVING CENTER");
       localStorage.setItem('d1place2',"MUNNESHWARAM HINDU TEMPLE");
       localStorage.setItem('d1place3',"KALPITIYA BEACH");
       localStorage.setItem('d1place4',"WILPATHTHU NATIONAL PARK");
       localStorage.setItem('d1place5',"ISINBASSAGALA VEHERA");

       

       

       

       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'KALPITIYA DIVING CENTER.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'MUNNESHWARAM HINDU TEMPLE.';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       'KALPITIYA BEACH.';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       'WILPATHTHU NATIONAL PARK.';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       '';
       


       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'KURUNEGALA.';

       localStorage.setItem('d2place1',"YAPAHUWA");
       localStorage.setItem('d2place2',"PADUWASNUWARA");
       localStorage.setItem('d2place3',"ATHUALA(ATHA GALA)");
       localStorage.setItem('d2place4',"PADENIYA RAJAMAHA VIHARAYA");
       localStorage.setItem('d2place5',"DADAGAMUWA TEMPLE");

       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'YAPAHUWA.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'PADUWASNUWARA.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       'ATHUALA(ATHA GALA).';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       'PADENIYA RAJAMAHA VIHARAYA.';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       'DADAGAMUWA TEMPLE.';
       
       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="hidden";
       document.getElementById("city4").style.visibility="hidden";
       document.getElementById("city5").style.visibility="hidden";
       document.getElementById("msg").style.visibility="hidden";

       localStorage.removeItem('d3place1');
       localStorage.removeItem('d3place2');
       localStorage.removeItem('d3place3');
       localStorage.removeItem('d3place4');
       localStorage.removeItem('d3place5');

       localStorage.removeItem('d4place1');
       localStorage.removeItem('d4place2');
       localStorage.removeItem('d4place3');
       localStorage.removeItem('d4place4');
       localStorage.removeItem('d4place5');

       localStorage.removeItem('d5place1');
       localStorage.removeItem('d5place2');
       localStorage.removeItem('d5place3');
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');
    }

    function fore(){

     localStorage.setItem('provings',"WESTERN PROVINGS");

        localStorage.setItem('distric1',"KALUTHARA");
        localStorage.setItem('distric2',"GAMPAHA");
        localStorage.setItem('distric3',"COLOMBO");
        localStorage.removeItem('distric4');
        localStorage.removeItem('distric5');
       
        
        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'KALUTHARA.';

       localStorage.setItem('d1place1',"KALUTHARA BODIYA");
       localStorage.setItem('d1place2',"RICHMEND CASTLE");
       localStorage.setItem('d1place3',"KALUTHARA BEACH");
       localStorage.setItem('d1place4',"THUDUGALA ALLA");
       localStorage.setItem('d1place5',"BODINAGALA FOREST HERMITAGE");




       
       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'KALUTHARA BODIYA.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'RICHMEND CASTLE.';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       'KALUTHARA BEACH.';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       'THUDUGALA ALLA.';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       'BODINAGALA FOREST HERMITAGE.';


       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'GAMPAHA.';

       localStorage.setItem('d2place1',"KALANIYA RAJAMAHA VIHARAYA");
       localStorage.setItem('d2place2',"GAMPAHA BOTANICAL ARDEN");
       localStorage.setItem('d2place3',"BEDDAGANA WETLAND PARK");
       localStorage.setItem('d2place4',"BOPAGAMA ELLA");
       localStorage.setItem('d2place5',"BROUNCE BEACH");

       

       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'KALANIYA RAJAMAHA VIHARAYA.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'GAMPAHA BOTANICAL ARDEN.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       'BEDDAGANA WETLAND PARK.';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       'BOPAGAMA ELLA.';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       'BROUNCE BEACH.';


       const ans3 = document.querySelector('#dthree');
        ans3.textContent =
       'COLOMBO.';

       localStorage.setItem('d3place1',"GANARAMAYA TEMPLE");
       localStorage.setItem('d3place2',"GALLFACE");
       localStorage.setItem('d3place3',"BERE LAKE");
       localStorage.setItem('d3place4',"MOUNT LAVINIA BEACH");
       localStorage.setItem('d3place5',"VIHARA MAHA DEVI PARK");



       const d3ans1 = document.querySelector('#d3place1');
        d3ans1.textContent =
       'GANARAMAYA TEMPLE.';
       const d3ans2 = document.querySelector('#d3place2');
        d3ans2.textContent =
       'GALLFACE.';
       const d3ans3 = document.querySelector('#d3place3');
        d3ans3.textContent =
       'BERE LAKE.';
       const d3ans4 = document.querySelector('#d3place4');
        d3ans4.textContent =
       'MOUNT LAVINIA BEACH.';
       const d3ans5 = document.querySelector('#d3place5');
        d3ans5.textContent =
       'VIHARA MAHA DEVI PARK.';
       
       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="visible";
       document.getElementById("city4").style.visibility="hidden";
       document.getElementById("city5").style.visibility="hidden";
       document.getElementById("msg").style.visibility="hidden";

       localStorage.removeItem('d4place1');
       localStorage.removeItem('d4place2');
       localStorage.removeItem('d4place3');
       localStorage.removeItem('d4place4');
       localStorage.removeItem('d4place5');

       localStorage.removeItem('d5place1');
       localStorage.removeItem('d5place2');
       localStorage.removeItem('d5place3');
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');
    }

    function five(){

     localStorage.setItem('provings',"SOUTHERN PROVINGS");

        localStorage.setItem('distric1',"GALLE");
        localStorage.setItem('distric2',"HAMBANTHOTA");
        localStorage.setItem('distric3',"MATHARA");
        localStorage.removeItem('distric4');
        localStorage.removeItem('distric5');
        
        
        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'GALLE.';

       localStorage.setItem('d1place1',"GALLE DUTCH FORT");
       localStorage.setItem('d1place2',"JUNGLE BEACH");
       localStorage.setItem('d1place3',"GALLE LIGHTHOUSE");
       localStorage.setItem('d1place4',"KOGGALA  BEACH");
       localStorage.setItem('d1place5',"GALLE FORT JUMPER AREA");

       



       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'GALLE DUTCH FORT.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'JUNGLE BEACH.';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       'GALLE LIGHTHOUSE.';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       'KOGGALA  BEACH.';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       'GALLE FORT JUMPER AREA.';


       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'HAMBANTHOTA.';

       localStorage.setItem('d2place1',"YALA NATIONAL PARK");
       localStorage.setItem('d2place2',"MAHAPELESSA HOT SPRINGS");
       localStorage.setItem('d2place3',"SITHULPAWWA TEMPLE");
       localStorage.setItem('d2place4',"KATHARAGAMA");
       localStorage.setItem('d2place5',"MULKIRIGALA ROCK TEMPLE");

       

       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'YALA NATIONAL PARK.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'MAHAPELESSA HOT SPRINGS.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       'SITHULPAWWA TEMPLE.';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       'KATHARAGAMA.';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       'MULKIRIGALA ROCK TEMPLE.';


       const ans3 = document.querySelector('#dthree');
        ans3.textContent =
       'MATHARA.';

       localStorage.setItem('d3place1',"PARAVI DUWA TEMPLE");
       localStorage.setItem('d3place2',"MATHARA BEACH");
       localStorage.setItem('d3place3',"DONDRA HEAD LIHTHOUSE");
       localStorage.setItem('d3place4',"STAR FORT");
       localStorage.setItem('d3place5',"WEHERAHENA TEMPLE");

       const d3ans1 = document.querySelector('#d3place1');
        d3ans1.textContent =
       'PARAVI DUWA TEMPLE.';
       const d3ans2 = document.querySelector('#d3place2');
        d3ans2.textContent =
       'MATHARA BEACH.';
       const d3ans3 = document.querySelector('#d3place3');
        d3ans3.textContent =
       'DONDRA HEAD LIHTHOUSE.';
       const d3ans4 = document.querySelector('#d3place4');
        d3ans4.textContent =
       'STAR FORT.';
       const d3ans5 = document.querySelector('#d3place5');
        d3ans5.textContent =
       'WEHERAHENA TEMPLE.';

       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="visible";
       document.getElementById("city4").style.visibility="hidden";
       document.getElementById("city5").style.visibility="hidden";
       document.getElementById("msg").style.visibility="hidden";

       localStorage.removeItem('d4place1');
       localStorage.removeItem('d4place2');
       localStorage.removeItem('d4place3');
       localStorage.removeItem('d4place4');
       localStorage.removeItem('d4place5');

       localStorage.removeItem('d5place1');
       localStorage.removeItem('d5place2');
       localStorage.removeItem('d5place3');
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');
    }

    function six(){

     localStorage.setItem('provings',"SABARAGAMUWA PROVINGS");

        localStorage.setItem('distric1',"KEGALLA");
        localStorage.setItem('distric2',"RATHNAPURA");
        localStorage.removeItem('distric3');
        localStorage.removeItem('distric4');
        localStorage.removeItem('distric5');
        
        
        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'KEGALLA.';

       localStorage.setItem('d1place1',"ROYAL BOTANICEL ARRDEN");
       localStorage.setItem('d1place2',"PINNAWALA ELEPHANT ORPHANAGE");
       localStorage.removeItem('d1place3');
       localStorage.removeItem('d1place4');
       localStorage.removeItem('d1place5');



       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'ROYAL BOTANICEL ARRDEN.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'PINNAWALA ELEPHANT ORPHANAGE.';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       '';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       '';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       '';
       
       

       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'RATHNAPURA.';

       localStorage.setItem('d2place1',"UDAWALAWA NATIONAL PARK");
       localStorage.setItem('d2place2',"BOPATH ELLA");
       localStorage.setItem('d2place3',"SINHARAJA RAIN FOREST");
       localStorage.setItem('d2place4',"KITHULGALA");
       localStorage.setItem('d2place5',"BAMBARAKANDA WATERFALL");

       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'UDAWALAWA NATIONAL PARK.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'BOPATH ELLA.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       'SINHARAJA RAIN FOREST.';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       'KITHULGALA.';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       'BAMBARAKANDA WATERFALL.';

       

       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="hidden";
       document.getElementById("city4").style.visibility="hidden";
       document.getElementById("city5").style.visibility="hidden";
       document.getElementById("msg").style.visibility="hidden";

       localStorage.removeItem('d3place1');
       localStorage.removeItem('d3place2');
       localStorage.removeItem('d3place3');
       localStorage.removeItem('d3place4');
       localStorage.removeItem('d3place5');

       localStorage.removeItem('d4place1');
       localStorage.removeItem('d4place2');
       localStorage.removeItem('d4place3');
       localStorage.removeItem('d4place4');
       localStorage.removeItem('d4place5');

       localStorage.removeItem('d5place1');
       localStorage.removeItem('d5place2');
       localStorage.removeItem('d5place3');
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');
    }

    function seven(){

     localStorage.setItem('provings',"UVA PROVINGS");

        localStorage.setItem('distric1',"BADULLA");
        localStorage.setItem('distric2',"MONARAGALA");
        localStorage.removeItem('distric3');
        localStorage.removeItem('distric4');
        localStorage.removeItem('distric5');
        
        
        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'BADULLA.';

       localStorage.setItem('d1place1',"MUTHIYANGANA TEMPLE");
       localStorage.setItem('d1place2',"DUNHINDA WATERFALL");
       localStorage.setItem('d1place3',"DEMODARA RAILWAY");
       localStorage.setItem('d1place4',"DHOWA ROCK TEMPLE");
       localStorage.setItem('d1place5',"OLD WELEKADE MARKET");





       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'MUTHIYANGANA TEMPLE.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'DUNHINDA WATERFALL.';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       'DEMODARA RAILWAY.';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       'DHOWA ROCK TEMPLE.';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       'OLD WELEKADE MARKET.';


       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'MONARAALA.';

       localStorage.setItem('d2place1',"UDAWALAWA NATIONAL PARK");
       localStorage.setItem('d2place2',"ELLEWELA WATERFALL");
       localStorage.removeItem('d2place3');
       localStorage.removeItem('d2place4');
       localStorage.removeItem('d2place5');

       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'UDAWALAWA NATIONAL PARK.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'ELLEWELA WATERFALL.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       '';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       '';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       '';
       

       

       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="hidden";
       document.getElementById("city4").style.visibility="hidden";
       document.getElementById("city5").style.visibility="hidden";
       document.getElementById("msg").style.visibility="hidden";

       
       localStorage.removeItem('d4place1');
       localStorage.removeItem('d4place2');
       localStorage.removeItem('d4place3');
       localStorage.removeItem('d4place4');
       localStorage.removeItem('d4place5');

       localStorage.removeItem('d5place1');
       localStorage.removeItem('d5place2');
       localStorage.removeItem('d5place3');
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');
    }

    function eight(){

     localStorage.setItem('provings',"CENTRAL PROVINGS");

        localStorage.setItem('distric1',"MATHALE");
        localStorage.setItem('distric2',"KANDY");
        localStorage.setItem('distric3',"NUWARA ELIYA");
        localStorage.removeItem('distric4');
        localStorage.removeItem('distric5');
        
        
        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'MATHALE.';

       localStorage.setItem('d1place1',"MEEMURE");
       localStorage.setItem('d1place2',"ALUWIHARA ROCK TEMPLE");
       localStorage.setItem('d1place3',"SEMBUWATHTHA LAKE");
       localStorage.setItem('d1place4',"PITAWALA PATHANA");
       localStorage.setItem('d1place5',"BABARAKIRI WATERFALL");


       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'MEEMURE.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'ALUWIHARA ROCK TEMPLE.';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       'SEMBUWATHTHA LAKE.';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       'PITAWALA PATHANA.';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       'BABARAKIRI WATERFALL.';


       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'KANDY.';

       localStorage.setItem('d2place1',"TEMPLE OF THE TOOTH");
       localStorage.setItem('d2place2',"HORTON PLAINS NATIONAL PARK");
       localStorage.setItem('d2place3',"BAHIRAWAKANDA TEMPLE");
       localStorage.setItem('d2place4',"LANKATHILATA TEMPLE");
       localStorage.setItem('d2place5',"KANDY VIEW POINT");


       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'TEMPLE OF THE TOOTH.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'HORTON PLAINS NATIONAL PARK.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       'BAHIRAWAKANDA TEMPLE.';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       'LANKATHILATA TEMPLE.';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       'KANDY VIEW POINT.';


       const ans3 = document.querySelector('#dthree');
        ans3.textContent =
       'NUWARA ELIYA.';

       
       localStorage.setItem('d3place1',"RAMBODA FALL");
       localStorage.setItem('d3place2',"LAXAPANA FALL");
       localStorage.setItem('d3place3',"PIDURUTHALAGALA");
       localStorage.setItem('d3place4',"BOMURUELLA FALL");
       localStorage.setItem('d3place5',"DEVON FALL");

       const d3ans1 = document.querySelector('#d3place1');
        d3ans1.textContent =
       'RAMBODA FALL.';
       const d3ans2 = document.querySelector('#d3place2');
        d3ans2.textContent =
       'LAXAPANA FALL.';
       const d3ans3 = document.querySelector('#d3place3');
        d3ans3.textContent =
       'PIDURUTHALAGALA.';
       const d3ans4 = document.querySelector('#d3place4');
        d3ans4.textContent =
       'BOMURUELLA FALL.';
       const d3ans5 = document.querySelector('#d3place5');
        d3ans5.textContent =
       'DEVON FALL.';

       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="visible";
       document.getElementById("city4").style.visibility="hidden";
       document.getElementById("city5").style.visibility="hidden";
       document.getElementById("msg").style.visibility="hidden";

       localStorage.removeItem('d4place1');
       localStorage.removeItem('d4place2');
       localStorage.removeItem('d4place3');
       localStorage.removeItem('d4place4');
       localStorage.removeItem('d4place5');

       localStorage.removeItem('d5place1');
       localStorage.removeItem('d5place2');
       localStorage.removeItem('d5place3');
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');
    }

    function nine(){

     localStorage.setItem('provings',"NORTH CENTRAL PROVINGS");

        localStorage.setItem('distric1',"POLONNARUWA");
        localStorage.setItem('distric2',"ANURADHAPURA");
        localStorage.removeItem('distric3');
        localStorage.removeItem('distric4');
        localStorage.removeItem('distric5');
        
        
        const ans1 = document.querySelector('#done');
        ans1.textContent =
       'POLONNARUWA.';

       localStorage.setItem('d1place1',"POTHGULWIHARAYA");
       localStorage.setItem('d1place2',"GALVIHARAYA");
       localStorage.removeItem('d1place3');
       localStorage.removeItem('d1place4');
       localStorage.removeItem('d1place5');


       const d1ans1 = document.querySelector('#d1place1');
        d1ans1.textContent =
       'POTHGULWIHARAYA.';
       const d1ans2 = document.querySelector('#d1place2');
        d1ans2.textContent =
       'GALVIHARAYA';
       const d1ans3 = document.querySelector('#d1place3');
        d1ans3.textContent =
       '';
       const d1ans4 = document.querySelector('#d1place4');
        d1ans4.textContent =
       '';
       const d1ans5 = document.querySelector('#d1place5');
        d1ans5.textContent =
       '';



       const ans2 = document.querySelector('#dtwo');
        ans2.textContent =
       'ANURADHAPURA.';

       localStorage.setItem('d2place1',"SRI MAHABODIYA");
       localStorage.setItem('d2place2',"SIIRIYA");
       localStorage.setItem('d2place3',"ISURUMUNIYA");
       localStorage.setItem('d2place4',"WILPATHTHU NATIONAL PARK");
       localStorage.setItem('d2place5',"RITIGALA");

       const d2ans1 = document.querySelector('#d2place1');
        d2ans1.textContent =
       'SRI MAHABODIYA.';
       const d2ans2 = document.querySelector('#d2place2');
        d2ans2.textContent =
       'SIIRIYA.';
       const d2ans3 = document.querySelector('#d2place3');
        d2ans3.textContent =
       'ISURUMUNIYA.';
       const d2ans4 = document.querySelector('#d2place4');
        d2ans4.textContent =
       'WILPATHTHU NATIONAL PARK.';
       const d2ans5 = document.querySelector('#d2place5');
        d2ans5.textContent =
       'RITIGALA.';
       
       
       document.getElementById("city1").style.visibility="visible";
       document.getElementById("city2").style.visibility="visible";
       document.getElementById("city3").style.visibility="hidden";
       document.getElementById("city4").style.visibility="hidden";
       document.getElementById("city5").style.visibility="hidden";
       document.getElementById("msg").style.visibility="hidden";


       localStorage.removeItem('d3place1');
       localStorage.removeItem('d3place2');
       localStorage.removeItem('d3place3');
       localStorage.removeItem('d3place4');
       localStorage.removeItem('d3place5');

       localStorage.removeItem('d4place1');
       localStorage.removeItem('d4place2');
       localStorage.removeItem('d4place3');
       localStorage.removeItem('d4place4');
       localStorage.removeItem('d4place5');

       localStorage.removeItem('d5place1');
       localStorage.removeItem('d5place2');
       localStorage.removeItem('d5place3');
       localStorage.removeItem('d5place4');
       localStorage.removeItem('d5place5');
    }
    
     
    

    function going1(){
      
      localStorage.setItem('districno',"01");
    }
    function going2(){
      
      localStorage.setItem('districno',"02");
    }
    function going3(){
      localStorage.setItem('districno',"03");
    }
    function going4(){
      localStorage.setItem('districno',"04");
    }
    function going5(){
      localStorage.setItem('districno',"05");
    }
     