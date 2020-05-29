<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <transition appear enter-active-class="animate__animated animate__flipInY" mode="out-in">
                <component :wrong-answer="wrongAnswer" :shake-animate="shakeAnimate" :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
              </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';

    export default {
        data() {
            return {
                mode: 'app-question',
                wrongAnswer: false,
                shakeAnimate: false
            }
        },
        methods: {
          answered(isCorrect) {
              if (isCorrect) {
                  this.mode = 'app-answer';
                  this.wrongAnswer = false;
              } else {
                  this.mode = 'app-question';

                  if (this.wrongAnswer) {
                    this.shakeAnimate = true;
                    var vm = this;
                    setTimeout(function(){ vm.shakeAnimate = false; }, 1000);
                  } else {
                    this.wrongAnswer = true;
                  }


              }
          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }
</script>
