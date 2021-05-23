jQuery(document).ready(function () {
    // Buat koneksi
    // for (var i = 1; i <= 5; i++) {

    //     this["conn" + i] = jqSimpleConnect.connect("#center-point" + i, "#soal" + i);
    //     // var connx = [];
    //     // connx = connx.push(this.conn);
    //     // DivG_Anim1(this["conn" + i]);
    // }
    // this["conn" + i] = jqSimpleConnect.connect("#center-point" + i, "#soal" + i);
    // DivG_Anim1(this["conn1"]);
    // DivG_Anim3(this["conn2"]);
    conn1 = jqSimpleConnect.connect("#center-point" + 1, "#soal" + 1);
    conn2 = jqSimpleConnect.connect("#center-point" + 2, "#soal" + 2);
    conn3 = jqSimpleConnect.connect("#center-point" + 3, "#soal" + 3);
    conn4 = jqSimpleConnect.connect("#center-point" + 4, "#soal" + 4);
    conn5 = jqSimpleConnect.connect("#center-point" + 5, "#soal" + 5);
    Conn_1_1(conn1);
    Conn_2_1(conn2);
    Conn_3_1(conn3);
    Conn_4_1(conn4);
    Conn_5_1(conn5);

});

// Define connector animation functions .

function Conn_1_1(connection) {
    jQuery('#center-point1').animate(
        { top: '+=70' },
        {
            duration: 5000, step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Init second animation.
                Conn_1_2(connection);
            }
        });
}

function Conn_1_2(connection) {
    jQuery('#center-point1').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_1_1(connection);
            }
        });
}

function Conn_2_1(connection) {
    jQuery('#center-point2').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_2_1(connection);
            }
        });
}

function Conn_2_2(connection) {
    jQuery('#center-point2').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_2_1(connection);
            }
        });
}

function Conn_3_1(connection) {
    jQuery('#center-point3').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_3_2(connection);
            }
        });
}

function Conn_3_2(connection) {
    jQuery('#center-point3').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_3_1(connection);
            }
        });
}

function Conn_4_1(connection) {
    jQuery('#center-point4').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_4_2(connection);
            }
        });
}

function Conn_4_2(connection) {
    jQuery('#center-point4').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_4_1(connection);
            }
        });
}

function Conn_5_1(connection) {
    jQuery('#center-point5').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_5_2(connection);
            }
        });
}

function Conn_5_2(connection) {
    jQuery('#center-point5').animate(
        { top: '-=70' },
        {
            duration: 5000,
            step: function () {
                // Repaint connection.
                jqSimpleConnect.repaintConnection(connection);
            },
            complete: function () {
                // Re-init first animation.
                Conn_5_1(connection);
            }
        });
}


// Buat Random Soal

var soal = ['1 + 1 = ...', '2 + 1 = ...', '3 + 1 = ...', '4 + 1 = ...', '5 + 1 = ...'];
var numbers_j = [[1, '2'], [2, '3'], [3, '4'], [4, '5'], [5, '6']];
var numbers = [1, 2, 3, 4, 5];
// var jawaban = ['2', '3', '4', '5', '6'];
// var numbers_j = [1, 2, 3, 4, 5];
numbers_j.sort(function () {
    return Math.random() - .5
});

// jawaban = jawaban[Math.floor(Math.random() * jawaban.length)]
//console.log(numbers_j[0][1]);

for (var i = 0; i < 5; i++) {

    // $("#jawaban" + numbers[i]).droppable({
    //     accept: '#soal' + numbers[i],
    //     hoverClass: 'hovered',
    //     drop: handleObjectDrop
    // });

    $('<tr>' + '</tr>').attr('id', 'jumlah-soal' + numbers[i]).appendTo('#table1');
    $('<td>' + '</td>').attr('class', 'td-soal' + numbers[i]).appendTo('#jumlah-soal' + numbers[i]);
    $('<div>' + '</div>').attr('class', 'kolom-soal' + numbers[i]).appendTo('.td-soal' + numbers[i]);
    $('<div>' + soal[i] + '</div>').data('soal', soal[i]).attr('id', 'text-soal' + numbers[i]).appendTo('.kolom-soal' + numbers[i]);
    $('<div>' + '</div>').attr('id', 'center-point' + numbers[i]).appendTo('.kolom-soal' + numbers[i]);
    $('<div>' + '</div>').attr('id', 'soal' + numbers[i]).appendTo('.kolom-soal' + numbers[i]).draggable({
        stack: '#soal' + numbers[i],
        cursor: 'move',
        revert: true
    });
    $('<td>' + '</td>').attr('class', 'td-jawaban' + numbers[i]).appendTo('#jumlah-soal' + numbers[i]);
    $('<div>' + '</div>').attr('class', 'kolom-jawaban' + numbers[i]).appendTo('.td-jawaban' + numbers[i]);
    $('<div>' + '</div>').attr('id', 'jawaban' + numbers[i]).appendTo('.kolom-jawaban' + numbers[i]).droppable({
        accept: '#soal' + numbers_j[i],
        hoverClass: 'hovered',
        drop: handleObjectDrop
    });
    $('<div>' + numbers_j[i][1] + '</div>').data('jawaban', numbers_j[i][1]).attr('id', 'text-jawaban' + numbers[i]).appendTo('.kolom-jawaban' + numbers[i]);

}

function handleObjectDrop(event, ui) {
    ui.draggable.addClass('correct');
    ui.draggable.draggable('disable');
    $(this).droppable('disable');
    ui.draggable.position({
        of: $(this),
        my: 'left top',
        at: 'left top',
        using: function (css, calc) {
            $(this).animate(css, 200, "linear");
        }
    });
    ui.draggable.draggable('option', 'revert', false);
}