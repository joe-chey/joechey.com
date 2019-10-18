var title_font_size = parseFloat($(".description").css("font-size"));
var title_font_color = "#555";
var title_font_weight = "200";
var ctx_concert = document.getElementById('chart_concert').getContext('2d');
var chart_concert = new Chart(ctx_concert, {
    type: 'bar',
    data: {
        labels: ['Fall 2015', 'Spring 2016', 'Fall 2016', 'Spring 2017'],
        datasets: [{
            label: '# of Students Attended',
            data: [140, 130, 160, 230],
            backgroundColor: [
                'rgba(3, 29, 133, 0.6)',
                'rgba(3, 29, 133, 0.6)',
                'rgba(3, 29, 133, 0.6)',
                'rgba(3, 29, 133, 0.6)',
            ],
            borderColor: [
                'rgba(3, 29, 133, 1)',
                'rgba(3, 29, 133, 1)',
                'rgba(3, 29, 133, 1)',
                'rgba(3, 29, 133, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Kinetic Sound: Student Attendance in Live Concert Productions',
            fontSize: title_font_size,
            fontStyle: title_font_weight,
            fontColor: title_font_color
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
                'rgba(31, 105, 45, 0.6)',
                'rgba(31, 105, 45, 0.6)',
                'rgba(31, 105, 45, 0.6)',
                'rgba(31, 105, 45, 0.6)',
                'rgba(31, 105, 45, 0.6)',
            ],
            borderColor: [
                'rgba(31, 105, 45, 1)',
                'rgba(31, 105, 45, 1)',
                'rgba(31, 105, 45, 1)',
                'rgba(31, 105, 45, 1)',
                'rgba(31, 105, 45, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Kinetic Sound: Max Social Media Reach Per Semester',
            fontSize: title_font_size,
            fontStyle: title_font_weight,
            fontColor: title_font_color
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
                'rgba(153, 51, 51, 0.6)',
                'rgba(153, 51, 51, 0.6)',
                'rgba(153, 51, 51, 0.6)',
                'rgba(153, 51, 51, 0.6)',
                'rgba(153, 51, 51, 0.6)',
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
            text: 'Kinetic Sound: Active Membership',
            fontSize: title_font_size,
            fontStyle: title_font_weight,
            fontColor: title_font_color
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