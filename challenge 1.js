/* ---------------lijndiagram----------------*/
            var ctx = document.getElementById('lijn').getContext('2d');

                Chart.defaults.global.defaultFontColor = 'white';
                Chart.defaults.global.defaultFontFamily = 'Arial';


                
                
                var chart = new Chart(ctx, {


              
                type: 'line',

              
                data: {
                    labels: ['3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00'],
                    datasets: [{
                        label: 'Zwaartekracht (g)',
                        backgroundColor: 'rgba(100, 200, 180, 0.3)',
                        borderColor: 'rgb(50, 110, 100)',
                        data: [3.98, 3.00, 2.74, 2.03, 1.54, 0.95, 0.38],
                        

                    }]
                },

               
                options: {

                    scales: {
                        xAxes: [{
                            gridLines: {
                    
                                color: "#5E6E77"
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                    
                                color: "#5E6E77"
                            }
                        }]
                     },



                    title: {
                        display: true,
                        text:'Grootte van de zwaartekracht',
                        fontSize: 15
                    }

                    
                }
            });


     

       

/* ---------------staafdiagram----------------*/

           var ctx = document.getElementById('staaf').getContext('2d');
                var chart = new Chart(ctx, {
               
                type: 'bar',

               
                data: {
                    labels: ['water', 'koffie', 'thee', 'limonade', 'appelsap'],
                    datasets: [{
                        label: 'Voorraden in liters',
                        data: [10, 30, 25, 18, 23, 13],
                        backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                    
                ],
                borderWidth: 1
            }]
        },
        options: {



            scales: {

                xAxes: [{
                    gridLines: {
                        color: "#5E6E77"
                    }
                }],


                yAxes: [{
                    gridLines: {
                        color: "#5E6E77"
                    },

                    ticks: {
                        beginAtZero: true
                    }
                }]
            }

        }
    });



/* ---------------donutdiagram----------------*/

           var ctx = document.getElementById('donut').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Zuurstof', 'Leeg'],
                        datasets: [{
                            label: 'Brandstof',
                            data: [90, 10],
                            backgroundColor: [
                                'rgba(114, 211, 153, 0.4)',
                                'rgba(196, 95, 95, 0.5)'
                                
                            ],
                            borderColor: [
                                'rgba(114, 211, 153, 1)',
                                'rgba(196, 95, 95, 0.8)'
                                
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                        display: true,
                        text:'Zuurstofvoorraad aan boord',
                        fontSize: 15
                        },



                        responsive: true,
                        scales: {

                            xAxes: [{
                                gridLines: {
                                    color: "#5E6E77"
                                }
                    }],

                            yAxes: [{
                                gridLines: {
                                    color: "#5E6E77"
                                },


                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });


/*---------------lijn2 diagram -----------------*/
            
               var ctx = document.getElementById('lijn2').getContext('2d');

                Chart.defaults.global.defaultFontColor = 'white';
                Chart.defaults.global.defaultFontFamily = 'Arial';
                /*Chart.defaults.global.defaultAxesor = 'white';*/
                
                var chart = new Chart(ctx, {

                type: 'line',

                data: {
                    labels: ['1', '2', '3', '4', '5', '6', '7'],
                    datasets: [{
                        label: 'm/s',
                        backgroundColor: 'rgba(128, 143, 214, 0.3)',
                        borderColor: 'rgb(128, 143, 214)',
                        data: [100, 302, 568, 899, 10448, 10592, 10701],
                        

                    }]
                },

               
                options: {

                    scales: {

                        xAxes: [{
                            gridLines: {
                                color: "#5E6E77"
                            }
                        }],


                        yAxes: [{
                            gridLines: {
                                color: "#5E6E77"
                            },

                            
                        }]
                    },



                    title: {
                        display: true,
                        text:'Afgelegde afstand over tijd',
                        fontSize: 15
                    }
                }
            });

           



        
