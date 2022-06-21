new Vue({
    el: '#app',
    components: {

    },
    data: {

        isNavbarOpen: false,
        isMenuCabinetOpen: false,
        imageUrl: '',

        iTriggers: {
            iKeyHover: false,
            iAnchorHover: false,
            iDividersHover: false,
        },

        iMove: {
            movePoints: false,
            isMoveEnd: false,
        },

        iStart: {
            showPoints: false,
            showTitle: false,
            showPetr: false,
            showPetrMob: false,
            showPointsMob: false,
        },
    },

    methods: {

        iMouseOver: function(point){
            if (this.iMove.isMoveEnd == true) {
                this.iTriggers[point] = true
            }
        }

    },


    computed: {

    },

    mounted () {

        vm = this
        /*if (sessionStorage.isFirstTime && sessionStorage.isFirstTime == 'false') {
            vm.mainShow = true
        } else {*/
            window.addEventListener("load", function (event) {
                setTimeout(function () {
                    //vm.mainShow = true
                    vm.iStart.showTitle = true
                }, 1500)

                setTimeout(function () {
                    //vm.mainShow = true
                    vm.iStart.showPoints = vm.iStart.showPetrMob = true
                }, 2500)

                setTimeout(function () {
                    //vm.mainShow = true
                    vm.iStart.showPointsMob = true
                }, 3500)

                setTimeout(function () {
                    //vm.mainShow = true
                    vm.iStart.showPetr = vm.iMove.movePoints = true
                }, 7500)

                setTimeout(function () {
                    //vm.mainShow = true
                    vm.iMove.isMoveEnd = true
                }, 8500)
            });
        /*}*/
    },

})
