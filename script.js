new Vue({
    el: '#app',
    name: 'birinci app',
    data: {
        syagac: 5,
        daxilolaneded: '',
        random: Math.floor(Math.random() * 16),
        kom: ''
    },
    methods: {
        yoxla2: function () {
            if (this.syagac == 0) {
                alert(`GAME OVER. Cavab: ${this.random}`)
                this.syagac = 5;
            }
            if (this.random > this.daxilolaneded) {
                this.kom = 'Çox kiçikdir';
                this.daxilolaneded = ""

            }
            if (this.random < this.daxilolaneded) {
                this.kom = 'Çox böyükdür';
                this.daxilolaneded = ""

            }
        },
        yoxla: function () {
            if (this.daxilolaneded == this.random) {
                alert('Təbriklər! Cavab:' + ' ' + this.random)
                this.syagac = 5
            } else {
                this.syagac--
            }
            if (typeof this.daxilolaneded === !'number') {
                alert(typeof this.daxilolaneded)
            }

        }
    },
    komek: function () {

    }
})