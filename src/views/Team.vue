<style lang="scss" scoped>

.team {
    color: white;
    background-color: #212120;
    width: 100%;
    height: 100%;
}
.team-card{
    background-color: #494949;
}
.inner-card{
  color: black;
}

</style>

<template>

<div class="team">
    <h2>Team dashBoard</h2>
    <b-container fluid>
        <b-row>
            <div class="col-12">
                <b-card class="team-card m-3" title="Mon équipe" sub-title="Slogan de mon équipe">
                    <b-card-text>
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                    </b-card-text>

                    <b-card-text>A second paragraph of text in the card.</b-card-text>

                    <a href="#" class="card-link">Card link</a>
                    <b-link href="#" class="card-link">Another link</b-link>
                </b-card>
            </div>
        </b-row>

        <b-row>
            <div class="col-12">
              <b-card class="team-card m-3" title="Classement des équipes">
                <b-card class="inner-card col-6">
                  <div class="row">

                  <div class="col-3"><img src="../assets/sunshare-logo.png" alt="SunShare" height="75"></div>
                  <div class="col-9">
                    <h1>Sunshare-Team</h1>
                    <h3>Slogan de l'équipe</h3>
                  </div>
                  </div>
                </b-card>
                <div class="row mx-3 mt-2">
                  <b-card class="inner-card col-6" title="Happy-Team" sub-title="Slogan de mon équipe">
                      <img src="../assets/sunshare-logo.png" alt="SunShare" height="75">
                  </b-card>
                </div>
                <div class="row mx-3 mt-2">
                  <b-card class="inner-card col-6" title="n2wo3-Team" sub-title="Slogan de mon équipe">
                      <img src="../assets/sunshare-logo.png" alt="SunShare" height="75">
                  </b-card>
                </div>
              </b-card>
            </div>
        </b-row>
    </b-container>
</div>

</template>

<script>

export default {
  name: 'Team'
}

</script>
