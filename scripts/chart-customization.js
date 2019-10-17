var ctx_concert = document.getElementById('chart_concert').getContext('2d');
var chart_concert = new Chart(ctx_concert, {
    type: 'bar',
    data: {
        labels: ['Fall 2015', 'Spring 2016', 'Fall 2016', 'Spring 2017'],
        datasets: [{
            label: '# of Students Attended',
            data: [140, 130, 160, 230],
            backgroundColor: [
                'rgba(235, 230, 49, 0.4)',
                'rgba(235, 230, 49, 0.4)',
                'rgba(235, 230, 49, 0.4)',
                'rgba(235, 230, 49, 0.4)',
            ],
            borderColor: [
                'rgba(235, 230, 49, 1)',
                'rgba(235, 230, 49, 1)',
                'rgba(235, 230, 49, 1)',
                'rgba(235, 230, 49, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Kinetic Sound: Student Attendance in Live Concert Productions'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx_online = document.getElementById('chart_online').getContext('2d');
var chart_online = new Chart(ctx_online, {
    type: 'bar',
    data: {
        labels: ['Summer 2015', 'Fall 2015', 'Spring 2016', 'Fall 2016', 'Spring 2017'],
        datasets: [{
            label: '# People Reached Online (Facebook, YouTube)',
            data: [100, 1200, 1500, 6000, 3000],
            backgroundColor: [
                'rgba(40, 11, 79, 0.6)',
                'rgba(40, 11, 79, 0.6)',
                'rgba(40, 11, 79, 0.6)',
                'rgba(40, 11, 79, 0.6)',
                'rgba(40, 11, 79, 0.6)',
            ],
            borderColor: [
                'rgba(40, 11, 79, 1)',
                'rgba(40, 11, 79, 1)',
                'rgba(40, 11, 79, 1)',
                'rgba(40, 11, 79, 1)',
                'rgba(40, 11, 79, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Kinetic Sound: Max Social Media Reach Per Semester'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx_members = document.getElementById('chart_membership').getContext('2d');
var chart_members = new Chart(ctx_members, {
    type: 'bar',
    data: {
        labels: ['Founding', 'Fall 2015', 'Spring 2016', 'Fall 2016', 'Spring 2017'],
        datasets: [{
            label: '# of Active Members',
            data: [3, 10, 16, 25, 50],
            backgroundColor: [
                'rgba(153, 51, 51, 0.7)',
                'rgba(153, 51, 51, 0.7)',
                'rgba(153, 51, 51, 0.7)',
                'rgba(153, 51, 51, 0.7)',
                'rgba(153, 51, 51, 0.7)',
            ],
            borderColor: [
                'rgba(153, 51, 51, 1)',
                'rgba(153, 51, 51, 1)',
                'rgba(153, 51, 51, 1)',
                'rgba(153, 51, 51, 1)',
                'rgba(153, 51, 51, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Kinetic Sound: Active Membership'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});