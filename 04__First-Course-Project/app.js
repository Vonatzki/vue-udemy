new Vue({
  el:"#app",
  data:{
    initialRound: true,
    gameFinished: false,
    logs:[],
    stats: {
      player:{
        life:100,
        attackDamage: 5,
        specialAttackDamage: 7,
        defense: 10,
        heal:3
      },
      monster:{
        life:100,
        attackDamage: 5
      }
    }
  },
  methods:{
    actionStart: function(action) {

      if (action === 'attack') {
        this.attackAction('attack');
        this.monsterAttackAction();
      }
      else if (action === 'specialAttack') {
        this.attackAction('special');
        this.monsterAttackAction();
      }
      else {
        this.healAction();
        this.monsterAttackAction();
      }

      // Check if player or monster wins
      if (this.stats.player.life <= 0 && this.stats.monster.life <= 0) {
        this.gameFinished = true;
        this.logs.unshift({
          logType:'draw',
          logMessage:'It\'s a draw! Game over!'
        });
      } else if (this.stats.player.life <= 0) {
        this.gameFinished = true;
        this.logs.unshift({
          logType:'defeat',
          logMessage:'You died! Game over!'
        });
      } else if (this.stats.monster.life <= 0) {
        this.gameFinished = true;
        this.logs.unshift({
          logType:'victory',
          logMessage:'You win! Congratulations!'
        });
      }
    },
    monsterAttackAction: function() {
      let damageRoll = this.stats.player.attackDamage + Math.random() * 10;
      this.stats.player.life -= damageRoll;
      this.logs.unshift({
        logType:'monster',
        logMessage:'Monster attacks player with ' + damageRoll.toFixed(2) + ' DMG'
      });
    },

    attackAction: function(action) {
      let finalAttackDamage;
      let logMessage;
      if (action === 'attack') {
        finalAttackDamage = this.stats.player.attackDamage;
        logMessage = 'Player attacks monster with ';
      } else if (action === 'special') {
        finalAttackDamage = this.stats.player.specialAttackDamage;
        logMessage = 'SPECIAL ATTACK! Player attacks monster with ';
      }

      let damageRoll = finalAttackDamage + Math.random() * 10;
      this.stats.monster.life -= damageRoll;
      this.logs.unshift({logType:'player', logMessage:logMessage + damageRoll.toFixed(2) + ' DMG'});
    },

    healAction: function() {
      let healRoll = this.stats.player.heal + Math.random() * 10;
      this.stats.player.life += healRoll;

      // Set player life to 100 if heal action exceeded max life
      if (this.stats.player.life >= 100) {
        this.stats.player.life = 100;
      }

      this.logs.unshift({logType:'player', logMessage:'Player heals for ' + healRoll.toFixed(2) + ' PTS'});
    },
    giveUp: function() {
      this.gameFinished = true;
      this.logs.unshift({
        logType:'defeat',
        logMessage:'Player gave up!'
      });
    },
    resetGame: function() {
      this.gameFinished = false;
      this.logs = [];
      this.stats = {
        player:{
          life:100,
          attackDamage: 5,
          specialAttackDamage: 10,
          defense: 10,
          heal:3
        },
        monster:{
          life:100,
          attackDamage: 5
        }
      };
    }
  }
})
