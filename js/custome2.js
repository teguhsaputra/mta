
class conn_animation {

    Conn_1_1(connection) {
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

    Conn_1_2(connection) {
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

    Conn_2_1(connection) {
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

    Conn_2_2(connection) {
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

    Conn_3_1(connection) {
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

    Conn_3_2(connection) {
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

    Conn_4_1(connection) {
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

    Conn_4_2(connection) {
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

    Conn_5_1(connection) {
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

    Conn_5_2(connection) {
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
}