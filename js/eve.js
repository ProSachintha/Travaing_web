const d1ans = document.querySelector('#provings');
            d1ans.textContent =
            localStorage.getItem('provings');
            const d1ans1 = document.querySelector('#distric');
            d1ans1.textContent =
            localStorage.getItem('distric');

        if(localStorage.getItem("districno")=="01"){
            const d1ans1 = document.querySelector('#distric');
            d1ans1.textContent =
            localStorage.getItem('distric1');
            
            const d1ans2 = document.querySelector('#place1');
            d1ans2.textContent =
            localStorage.getItem('d1place1');
            const d1ans3 = document.querySelector('#place2');
            d1ans3.textContent =
            localStorage.getItem('d1place2');
            const d1ans4 = document.querySelector('#place3');
            d1ans4.textContent =
            localStorage.getItem('d1place3');
            const d1ans5 = document.querySelector('#place4');
            d1ans5.textContent =
            localStorage.getItem('d1place4');
            const d1ans6 = document.querySelector('#place5');
            d1ans6.textContent =
            localStorage.getItem('d1place5');
        }

        else if(localStorage.getItem("districno")=="02"){

            const d1ans1 = document.querySelector('#distric');
            d1ans1.textContent =
            localStorage.getItem('distric2');

            const d1ans2 = document.querySelector('#place1');
            d1ans2.textContent =
            localStorage.getItem('d2place1');
            const d1ans3 = document.querySelector('#place2');
            d1ans3.textContent =
            localStorage.getItem('d2place2');
            const d1ans4 = document.querySelector('#place3');
            d1ans4.textContent =
            localStorage.getItem('d2place3');
            const d1ans5 = document.querySelector('#place4');
            d1ans5.textContent =
            localStorage.getItem('d2place4');
            const d1ans6 = document.querySelector('#place5');
            d1ans6.textContent =
            localStorage.getItem('d2place5');


        }
        else if(localStorage.getItem("districno")=="03"){

            const d1ans1 = document.querySelector('#distric');
            d1ans1.textContent =
            localStorage.getItem('distric3');

            const d1ans2 = document.querySelector('#place1');
            d1ans2.textContent =
            localStorage.getItem('d3place1');
            const d1ans3 = document.querySelector('#place2');
            d1ans3.textContent =
            localStorage.getItem('d3place2');
            const d1ans4 = document.querySelector('#place3');
            d1ans4.textContent =
            localStorage.getItem('d3place3');
            const d1ans5 = document.querySelector('#place4');
            d1ans5.textContent =
            localStorage.getItem('d3place4');
            const d1ans6 = document.querySelector('#place5');
            d1ans6.textContent =
            localStorage.getItem('d3place5');
            
        }
        else if(localStorage.getItem("districno")=="04"){

            const d1ans1 = document.querySelector('#distric');
            d1ans1.textContent =
            localStorage.getItem('distric4');

            const d1ans2 = document.querySelector('#place1');
            d1ans2.textContent =
            localStorage.getItem('d4place1');
            const d1ans3 = document.querySelector('#place2');
            d1ans3.textContent =
            localStorage.getItem('d4place2');
            const d1ans4 = document.querySelector('#place3');
            d1ans4.textContent =
            localStorage.getItem('d4place3');
            const d1ans5 = document.querySelector('#place4');
            d1ans5.textContent =
            localStorage.getItem('d4place4');
            const d1ans6 = document.querySelector('#place5');
            d1ans6.textContent =
            localStorage.getItem('d4place5');
            
        }
        else{


            const d1ans1 = document.querySelector('#distric');
            d1ans1.textContent =
            localStorage.getItem('distric5');

            const d1ans2 = document.querySelector('#place1');
            d1ans2.textContent =
            localStorage.getItem('d5place1');
            const d1ans3 = document.querySelector('#place2');
            d1ans3.textContent =
            localStorage.getItem('d5place2');
            const d1ans4 = document.querySelector('#place3');
            d1ans4.textContent =
            localStorage.getItem('d5place3');
            const d1ans5 = document.querySelector('#place4');
            d1ans5.textContent =
            localStorage.getItem('d5place4');
            const d1ans6 = document.querySelector('#place5');
            d1ans6.textContent =
            localStorage.getItem('d5place5');
        }


        function adding(){
            let x=document.getElementById('place');
            let y=x.options[x.selectedIndex].text;
            let z=document.getElementById('sdate').value;
            let w=document.getElementById('edate').value;
            var num=localStorage.getItem('tc')
            var s=parseInt(num)+1;
            
            
                localStorage.setItem('tripcount',s);
            
            
            if((x.options[x.selectedIndex].text)!="select"){
                if(localStorage.getItem('tripcount1')=="0"){
                    localStorage.setItem('TripPlace',y);
                    localStorage.setItem('sdate',z);
                    localStorage.setItem('edate',w);
                    localStorage.setItem('tripcount1',"1");

                }
                else if(localStorage.getItem('tripcount2')=="0"){
                
                    localStorage.setItem('TripPlace2',y);
                    localStorage.setItem('sdate2',z);
                    localStorage.setItem('edate2',w);
                    localStorage.setItem('tripcount2',"1");
                }
                else if(localStorage.getItem('tripcount3')=="0"){
                
                    localStorage.setItem('TripPlace3',y);
                    localStorage.setItem('sdate3',z);
                    localStorage.setItem('edate3',w);
                    localStorage.setItem('tripcount3',"1");
                }
                else if(localStorage.getItem('tripcount4')=="0"){
                    
                    localStorage.setItem('TripPlace4',y);
                    localStorage.setItem('sdate4',z);
                    localStorage.setItem('edate4',w);
                    localStorage.setItem('tripcount4',"1");
                }
                else if(localStorage.getItem('tripcount5')=="0"){
                    
                    localStorage.setItem('TripPlace5',y);
                    localStorage.setItem('sdate5',z);
                    localStorage.setItem('edate5',w);
                    localStorage.setItem('tripcount5',"1");
                }
                else if(localStorage.getItem('tripcount6')=="0"){
                    
                    localStorage.setItem('TripPlace6',y);
                    localStorage.setItem('sdate6',z);
                    localStorage.setItem('edate6',w);
                    localStorage.setItem('tripcount6',"1");
                }
                else if(localStorage.getItem('tripcount7')=="0"){
                    
                    localStorage.setItem('TripPlace7',y);
                    localStorage.setItem('sdate7',z);
                    localStorage.setItem('edate7',w);
                    localStorage.setItem('tripcount7',"1");
                }
                else if(localStorage.getItem('tripcount8')=="0"){
                    
                    localStorage.setItem('TripPlace8',y);
                    localStorage.setItem('sdate8',z);
                    localStorage.setItem('edate8',w);
                    localStorage.setItem('tripcount8',"1");
                }
                else if(localStorage.getItem('tripcount9')=="0"){
                    
                    localStorage.setItem('TripPlace9',y);
                    localStorage.setItem('sdate9',z);
                    localStorage.setItem('edate9',w);
                    localStorage.setItem('tripcount9',"1");
                }
                else if(localStorage.getItem('tripcount10')=="0"){
                    
                    localStorage.setItem('TripPlace10',y);
                    localStorage.setItem('sdate10',z);
                    localStorage.setItem('edate10',w);
                    localStorage.setItem('tripcount10',"1");
                }
                else{
                    alert("you ritch your all plan")
                }
                
                
            }
            else{
                alert("please select place");
            }
            
        }