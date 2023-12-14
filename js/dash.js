localStorage.setItem('tc',localStorage.getItem('tripcount'));

        const d1ans1 = document.querySelector('#PLACE1');
           d1ans1.textContent =
          localStorage.getItem('TripPlace');
          const d1ans2 = document.querySelector('#SDATE1');
           d1ans2.textContent =
          localStorage.getItem('sdate');
          const d1ans3 = document.querySelector('#EDATE1');
           d1ans3.textContent =
          localStorage.getItem('edate');
            
            const d2ans1 = document.querySelector('#PLACE2');
           d2ans1.textContent =
          localStorage.getItem('TripPlace2');
          const d2ans2 = document.querySelector('#SDATE2');
           d2ans2.textContent =
          localStorage.getItem('sdate2');
          const d2ans3 = document.querySelector('#EDATE2');
           d2ans3.textContent =
          localStorage.getItem('edate2');

          const d3ans1 = document.querySelector('#PLACE3');
           d3ans1.textContent =
          localStorage.getItem('TripPlace3');
          const d3ans2 = document.querySelector('#SDATE3');
           d3ans2.textContent =
          localStorage.getItem('sdate3');
          const d3ans3 = document.querySelector('#EDATE3');
           d3ans3.textContent =
          localStorage.getItem('edate3');

          const d4ans1 = document.querySelector('#PLACE4');
           d4ans1.textContent =
          localStorage.getItem('TripPlace4');
          const d4ans2 = document.querySelector('#SDATE4');
           d4ans2.textContent =
          localStorage.getItem('sdate4');
          const d4ans3 = document.querySelector('#EDATE4');
           d4ans3.textContent =
          localStorage.getItem('edate4');

          const d5ans1 = document.querySelector('#PLACE5');
           d5ans1.textContent =
          localStorage.getItem('TripPlace5');
          const d5ans2 = document.querySelector('#SDATE5');
           d5ans2.textContent =
          localStorage.getItem('sdate5');
          const d5ans3 = document.querySelector('#EDATE5');
           d5ans3.textContent =
          localStorage.getItem('edate5');

          const d6ans1 = document.querySelector('#PLACE6');
          d6ans1.textContent =
         localStorage.getItem('TripPlace6');
         const d6ans2 = document.querySelector('#SDATE6');
          d6ans2.textContent =
         localStorage.getItem('sdate6');
         const d6ans3 = document.querySelector('#EDATE6');
          d6ans3.textContent =
         localStorage.getItem('edate6');

         const d7ans1 = document.querySelector('#PLACE7');
         d7ans1.textContent =
        localStorage.getItem('TripPlace7');
        const d7ans2 = document.querySelector('#SDATE7');
         d7ans2.textContent =
        localStorage.getItem('sdate7');
        const d7ans3 = document.querySelector('#EDATE7');
         d7ans3.textContent =
        localStorage.getItem('edate7');

        const d8ans1 = document.querySelector('#PLACE8');
        d8ans1.textContent =
       localStorage.getItem('TripPlace8');
       const d8ans2 = document.querySelector('#SDATE8');
        d8ans2.textContent =
       localStorage.getItem('sdate8');
       const d8ans3 = document.querySelector('#EDATE8');
        d8ans3.textContent =
       localStorage.getItem('edate8');

       const d9ans1 = document.querySelector('#PLACE9');
       d9ans1.textContent =
      localStorage.getItem('TripPlace9');
      const d9ans2 = document.querySelector('#SDATE9');
       d9ans2.textContent =
      localStorage.getItem('sdate9');
      const d9ans3 = document.querySelector('#EDATE9');
       d9ans3.textContent =
      localStorage.getItem('edate9');

      const d10ans1 = document.querySelector('#PLACE10');
      d10ans1.textContent =
     localStorage.getItem('TripPlace10');
     const d10ans2 = document.querySelector('#SDATE10');
      d10ans2.textContent =
     localStorage.getItem('sdate10');
     const d10ans3 = document.querySelector('#EDATE10');
      d10ans3.textContent =
     localStorage.getItem('edate10');

        
          function one(){
              localStorage.removeItem('TripPlace');
              localStorage.removeItem('sdate');
              localStorage.removeItem('edate');
              localStorage.setItem('tripcount1',"0");
              location.reload();
          }

          function two(){
              localStorage.removeItem('TripPlace2');
              localStorage.removeItem('sdate2');
              localStorage.removeItem('edate2');
              localStorage.setItem('tripcount2',"0");
              location.reload();
          }

          function three(){
              localStorage.removeItem('TripPlace3');
              localStorage.removeItem('sdate3');
              localStorage.removeItem('edate3');
              localStorage.setItem('tripcount3',"0");
              location.reload();
          }

          function fore(){
              localStorage.removeItem('TripPlace4','sdate','edate');
              localStorage.removeItem('sdate4');
              localStorage.removeItem('edate4');
              localStorage.setItem('tripcount4',"0");
              location.reload();
          }

          function five(){
              localStorage.removeItem('TripPlace5','sdate','edate');
              localStorage.removeItem('sdate5');
              localStorage.removeItem('edate5');
              localStorage.setItem('tripcount5',"0");
              location.reload();
          }
          function six(){
            localStorage.removeItem('TripPlace6');
            localStorage.removeItem('sdate6');
            localStorage.removeItem('edate6');
            localStorage.setItem('tripcount6',"0");
            location.reload();
        }
        function seven(){
            localStorage.removeItem('TripPlace7');
            localStorage.removeItem('sdate7');
            localStorage.removeItem('edate7');
            localStorage.setItem('tripcount7',"0");
            location.reload();
        }
        function eight(){
            localStorage.removeItem('TripPlace8');
            localStorage.removeItem('sdate8');
            localStorage.removeItem('edate8');
            localStorage.setItem('tripcount8',"0");
            location.reload();
        }
        function nine(){
            localStorage.removeItem('TripPlace9');
            localStorage.removeItem('sdate9');
            localStorage.removeItem('edate9');
            localStorage.setItem('tripcount9',"0");
            location.reload();
        }
        function ten(){
            localStorage.removeItem('TripPlace10');
            localStorage.removeItem('sdate10');
            localStorage.removeItem('edate10');
            localStorage.setItem('tripcount10',"0");
            location.reload();
        }
