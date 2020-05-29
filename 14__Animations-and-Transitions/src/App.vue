<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button @click="show=!show" type="button" class="btn btn-primary" name="button">Show Alert!</button>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <!-- <hr> -->
                <!-- <transition name="fade">
                  <div v-if="show" class="alert alert-info">
                    Some info
                  </div>
                </transition> -->
                <!-- <br> -->
                <!-- <transition appear :name="alertAnimation">
                  <div v-if="show" class="alert alert-info">
                    Some info
                  </div>
                </transition>
                <br> -->
                <!-- <transition appear enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
                  <div v-if="show" class="alert alert-info">
                    Some info
                  </div>
                </transition> -->
                <!-- <br> -->
                <!-- <transition appear :name="alertAnimation" mode="out-in">
                  <div v-if="show" class="alert alert-info" key="info">
                    Some info
                  </div>
                  <div v-else class="alert alert-warning" key="warning">
                    Some warning
                  </div>
                </transition> -->
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"

                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled"
                  :css="false">
                  <div class="" style="width:100px; height:100px; background-color:lightgreen" v-if="load">
                  </div>
                </transition>
                <hr>
                <button class="btn btn-primary"
                  @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">
                  Toggle Component
                </button>
                <br><br>
                <transition name="fade" mode="out-in">
                <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button type="button" name="button" class="btn btn-primary" @click="addItem">
                  Add Item
                </button>
                <br><br>
                <ul class="list-group">
                  <transition-group name="slide">
                    <li
                      v-for="(number, index) in numbers"
                      class="list-group-item"
                      @click="removeItem(index)"
                      style="cursor:pointer"
                      :key="index">{{ number }}
                    </li>
                  </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
              show: false,
              load: false,
              alertAnimation:"fade",
              elementWidth: 100,
              selectedComponent:'app-success-alert',
              numbers:[1,2,3,4,5]
            };
        },
        methods:{
          addItem(){
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length + 1);

          },
          removeItem(index){
            this.numbers.splice(index, 1);
          },
          beforeEnter(el){
            console.log('beforeEnter');
            this.elementWidth = 100;
            el.style.width = this.elementWidth + 'px';
          },
          enter(el, done){
            console.log('enter');

            let round = 1;
            const interval = setInterval(() => {
              console.log('Adding width');
              el.style.width = (this.elementWidth + round * 10) + 'px';
              round++;

              if (round > 20){
                clearInterval(interval);
                done();
              }
            }, 20);
          },
          afterEnter(el){
            console.log('afterEnter');
          },
          enterCancelled(el){
            console.log('enterCancelled');
          },
          beforeLeave(el){
            console.log('beforeLeave');
            this.elementWidth = 300;
            el.style.width = this.elementWidth + 'px';
          },
          leave(el, done){
            console.log('leave');

            let round = 1;
            const interval = setInterval(() => {
              console.log('Removing width');
              el.style.width = (this.elementWidth - (round * 10)) + 'px';
              round++;

              if (round > 20){
                clearInterval(interval);
                done();
              }
            }, 20);
          },
          afterLeave(el){
            console.log('afterLeave');
          },
          leaveCancelled(el){
            console.log('leaveCancelled');
          }
        },

        components:{
          appDangerAlert:DangerAlert,
          appSuccessAlert:SuccessAlert
        }
    }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 0.1s;
  }

  .fade-leave {
    /* opacity: 1; */
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.1s;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.2s ease-out forwards;
    transition: opacity 0.1s;
  }

  .slide-leave {
  }

  .slide-leave-active {
    opacity:0;
    transition: opacity 0.5s;
    animation: slide-out 0.5s ease-out forwards;
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
