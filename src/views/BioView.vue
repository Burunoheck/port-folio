<template>
  <v-app app>
    <v-main id="pagi">
      <router-view></router-view>
      <v-container fluid style="margin:5%; padding-left: 8%;">
        <v-row style="justify-content:center; align-items:center; display:flex;">
          <v-col>
            <v-card
              elevation="6"
              style="
                padding: 3%;
                margin: 5vh;
                background-color: transparent;
                max-width: 70%;
                border-radius: 0% 3% 0% 3%;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
              "
            >
              Lorem ipsum sollicitudin ipsum torquent ornare enim, ligula et
              ultrices pulvinar semper, magna gravida at felis quis. sed lacus
              duis ante fusce consequat facilisis diam est, justo taciti congue
              id iaculis habitant. lorem hac consequat metus erat etiam
              tristique morbi, augue taciti quis id donec senectus nisl, et
              convallis inceptos sociosqu metus laoreet. facilisis sociosqu
              rutrum purus massa fames enim dui nam, lacus praesent egestas ad
              mi quis tortor, aenean eu et maecenas aptent purus libero. commodo
              convallis aenean aliquet nullam varius pulvinar nunc cursus
              iaculis aptent curae, sapien scelerisque proin odio quam volutpat
              accumsan rutrum habitasse faucibus fermentum, nunc aptent
              hendrerit sollicitudin duis aenean varius praesent tempor donec.
            </v-card>
            <v-row>
              <v-card
              elevation="6"
                style="
                padding: 3%;
                margin: 5vh;
                  background-color: transparent;
                  max-width: 33%;
                  max-height: 33%;
                  border-radius: 3% 0% 3% 0%;
                  font-family: Verdana, Geneva, Tahoma, sans-serif;
                "
              >
                <img src="../assets/logo.png" alt="logogo" />
                <v-text>
                  vitae nulla varius consectetur lacus massa, eu fusce sagittis
                  eu nulla accumsan, varius habitant volutpat ante.
                </v-text>
              </v-card>
              <v-card
              elevation="6"
                style="
                padding: 3%;
                margin: 5vh;
                border-radius: 3% 3% 3% 3%;
                  background-color: transparent;
                  max-width: 32%;
                  max-height: 32%;
                  font-family: Verdana, Geneva, Tahoma, sans-serif;
                "
              >
                <img src="../assets/logo.png" alt="logogo" />
                <v-text>
                  Quis habitant sagittis vulputate molestie cubilia consectetur
                  aliquam proin eu iaculis ut, accumsan fames velit eget aliquam
                  himenaeos facilisis erat leo curabitur, blandit fusce mattis
                  laoreet luctus cubilia hac auctor elit accumsan.
                </v-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
