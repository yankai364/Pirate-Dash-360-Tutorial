# Learn Augmented Reality with Spark AR & Pirate Dash 360
## Learn to create an Augmented Reality Puzzle Filter using Spark AR World Effect, through Pirate Dash 360!

<p align="center"><img src="img/PirateDash360_Tutorial_thumbnail.png" width="70%"/></p>

<p align="center"><i>Submission for Facebook Developer Circles Community Challenge</i></center>
<p align="center">
Team Members: <a href="https://github.com/gabrielkzm">Gabriel Koh</a>, <a href="https://github.com/ngrq123">Ng Rui Qin</a>, <a href="https://github.com/yankai364">Ong Yan Kai</a>, <a href="https://github.com/vncnttkkk">Vincent Tok</a>
</p>

## 1. Introduction

Always wanted to create an immersive Instagram game effect, but not sure how to? We will show you the way! This tutorial will guide you on how to create an Augmented Reality (AR) puzzle game using the Spark AR Studio - no experience required.

It can be daunting to learn a new technology or software, especially for cutting edge technology such as AR. Fret not, we all start somewhere! For us, our journey and foray into this space only commenced during the competition period of the Facebook AR Hackathon, and if we can do it, so can you! 

### a. What Are We Building

We will be re-creating a puzzle game that we did for the Facebook AR Hackathon, called [Pirate Dash 360](https://devpost.com/software/pirate-dash-360). It is an immersive 360° AR puzzle platformer game filter that utilises the phone's back-facing camera. Players guide the pirate to the treasure by swapping directional tiles. 

> Note: We will be creating a simplified, one-level version of Pirate Dash 360.
 
<p align="center"><img src="img/1a.png" width="70%"/></p>

### b. Key Concepts Covered

Through this tutorial, you will learn how to:
- Utilise various features of Spark AR Studio
- Import and customize game assets using Spark AR Studio
- Augment game environment using Spark AR Studio and JavaScript
- Add animations using Spark AR Studio and JavaScript

## 2. Before We Start
### a. Knowledge Prerequisites
- Javascript: https://javascript.info, https://www.json.org/json-en.html

Basic JavaScript knowledge is recommended for this tutorial as it is required for scripting of animations and setting up the scene for the game. Within JavaScript, JavaScript Object Notation (JSON) is a data format which can be used to define the structure of the game. In Pirate Dash 360, it is used to define the tiles required for each level.

### b. Software Prerequisites
- **Spark AR Studio v98**: https://sparkar.facebook.com/ar-studio/download
- **A code editor**, such as Visual Studio Code: https://code.visualstudio.com/download 

### c. Getting Started
<p align="center"><img src="img/2c.png" width="70%"/></p>

To get started, download this repository by selecting **Download ZIP** and save it to a familiar location. Open the **starter** folder.

### d. Understanding Starter Project
[TODO: include file structure pic and explanation]

With a good understanding of the pre-starter project, we can now begin!

## 3. Part 1: Importing and Customizing Game Assets

We will proceed to import and customize the game assets in the Spark AR environment. To simplify this process, please refer to the **/starter/objects** folder for all the relevant game assets that you would require for this section. 

> The objective of this section is to prepare the static assets for subsequent feature implementation i.e creating the augmented environment, implementing game logic and so on. 

### a. Placing Tiles and Pirate in World View
### b. Resizing Objects
### c. Changing the Texture
### d. Grouping Objects (Tile with Directional Arrows and Chest)

## 4. Part 2: Creating the Augmented Environment
### a. Positioning Tiles using Grid System
### b. Level Design
### c. Mapping Spark AR objects to JavaScript objects
### d. Rendering the Level
### e. Selecting Tiles
### f. Swapping Tiles
### g. Shifting the Pirate from One Tile to Another
### h. Starting the Game

## 5. Part 3: Giving Life to the Pirate

Let’s bring the pirate to life! To do so, an animation playback controller is needed for each animation. The patch editor will then be used to link the animations as options for the option picker to control the pirate’s animation from the script. 

After animating the pirate, we will then make the pirate rotate towards the direction corresponding to the direction he is moving towards.

The aim of this section is to implement movements to make the character in the game move - giving it lifelike animations. This is crucial in many AR experiences, augmenting reality by introducing new 3D objects into the scene and making them feel lifelike.

### a. Adding Animations

1. We will first add the **idle** animation 
2. Under the Assets panel, click on **Add Asset** > **Animation Playback Controller** 
3. Rename the animation playback controller to `pirate_idle` 
4. In the Inspector (the panel on the right), select **idle** from the Animation Clip dropdown box.

![](img/animation_playback_controller.png)

Repeat the same steps for the **walk** and **crash** animation, naming the animation playback controllers `pirate_walk` and `pirate_crash` respectively.

Now, let us link the animations together using the Patch Editor. To show the Patch Editor, select **View** on the menu bar, then select **Show/Hide Patch Editor**. The Patch Editor will be shown on the bottom middle of the Spark AR window. On the bottom right of the Patch Editor, click on **Add Patch**. In the pop up, select **Utility** > **Option Picker**, then click on **Add Patch**. Below the Option Picker patch, select the type to be **Animation Data**. 

To control the pirate’s animation, the Animation Target patch for the pirate object must be added. Select the **pirate** object in the Scene panel, then in the Inspector, **select the arrow (pointing to the right) on the left of Animation**. Then, to link the Option Picker with the Animation Target, **click and hold the output port of the Option Picker**, and **drag across to the input port** of the Animation Target.

To control the options (via `script.js`), a **Variables from Script** patch is used. In the Assets panel under Script, click on **script.js**. In the Inspector, **click the + button to the right of From Script and select Number**. Change the variable name from `scriptToEditorVar` to `pirate_animation`. Remember this variable name as it will be used in the script. Right click on **scripts.js** and click **Create Patch**. Link the **Variables from Script** patch to the first input port of the **Option Picker**.

In the Assets panel, drag the pirate_idle, pirate_walk and pirate_crash animation playback controllers to the Patch Editor, and **link the corresponding Animation patches** to the second, third and fourth input ports of the Option Picker patch respectively. The option number for each animation corresponds to the input port of the Option Picker patch (and since the default option is 0, the default animation is the idle animation).

![](img/patch_editor.png)

Now changing between animations can be scripted in `scripts.js` with `Patches.inputs.setScalar`. Add the `Patches` module as a dependency.

```
const Patches = require('Patches');
```

Set the animation to **idle** (option 0) when the pirate object is found in the scene.

```
// Place character on start tile
Scene.root.findFirst("pirate")
    .then(agent => {
        let agentPosition = start_tile.position;
        ...

        // Set agent animation clip to idle
        Patches.inputs.setScalar('pirate_animation', 0)

        // Listen for tap on character
        ...
    })
```

Set the animation to **walk** (option 1) in a new function `animateMoveAgent`, which will be called when the pirate takes a step. After each step, reset the animation to idle.

```
function animateMoveAgent(agent, destinationPosition, direction) {
    
    Patches.inputs.setScalar('pirate_animation', 1);

    // Animate agent towards direction
    const tdAgentMove = getTimeDriver(500);
    const point = getMidPointFromIndex(destinationPosition);

    agent.transform.x = shiftx(tdAgentMove, agent, point[0]);
    agent.transform.z = shiftz(tdAgentMove, agent, point[1]);
    tdAgentMove.start();
    Time.setTimeout(() => {
        // Set back to idle after each step
        if (!player_lost) {
            Patches.inputs.setScalar('pirate_animation', 0)
        }
    }, 500)

}
```

Add the call to `animateMoveAgent` in `moveAgent`.

```
function moveAgent(agent, agentPosition) {
    ...
    } else if (direction == "down") {
        destinationPosition = [agentPosition[0], agentPosition[1] + 1];
    }
 
    animateMoveAgent(agent, destinationPosition, direction);
 
    if (destinationPosition == null || position_tiles[destinationPosition] == null) {
     ...
}
```

Set the animation to **crash** (option 2) when the pirate takes an invalid move, or when it moves backwards (to a visited tile) in `moveAgent`. The `moveAgent` function is called when the pirate starts navigating from one tile to another (after being tapped on by the player).

```
function moveAgent(agent, agentPosition) {
    let direction = position_tiles[agentPosition].direction;
    ...

    if (destinationPosition == null || position_tiles[destinationPosition] == null) {
        Diagnostics.log("Invalid move");
        player_lost = true;

        Time.setTimeout(() => {
            // Position to move toward is invalid - change to crash animation clip
            Patches.inputs.setScalar('pirate_animation', 2);
        }, 500)

        return agentPosition;
    } else if (position_visited[destinationPosition]) {
        Diagnostics.log("Moved backwards");
        player_lost = true;
        
        // Dead - Change to crash animation clip
        Time.setTimeout(() => {
            Patches.inputs.setScalar('pirate_animation', 2);
        }, 500)

        return agentPosition;
    }
    
    ...

    return destinationPosition;
}
```

Try starting the game and the pirate will be transitioning between animations and moving from tile to tile.

### b. Rotating the Pirate

Last but not least, we need to ensure the pirate is facing the right direction! Let us add a new variable player_direction to store the pirate’s direction. The default direction is down, as the pirate is facing the player.

```
// Gameflow variables
let player_direction = "down"
```

Then, add an if block in `animateMoveAgent` to check if the direction is the same as the player’s direction. If it isn't, rotate the agent with a new function `animateRotateAgent`.

```
function animateMoveAgent(agent, destinationPosition, direction) {
    Patches.inputs.setScalar('pirate_animation', 1)
 
    // Rotate agent to face direction
    if (direction !== player_direction) {
        animateRotateAgent(agent, direction)
        player_direction = direction
    }
 
    // Animate agent towards direction
    const tdAgentMove = getTimeDriver(500);
    ...
}
```

The `animateRotateAgent` function is created to implement the animation with `Animation.animate`.

```
function animateRotateAgent(agent, direction) {
    const tdRotateAgent = getTimeDriver()
    let angles = {
        "up": degreesToRadians(180),
        "down": degreesToRadians(0),
        "right": degreesToRadians(90),
        "left": degreesToRadians(270)
    }
 
    agent.transform.rotationY = Animation.animate(
        tdRotateAgent,
        Animation.samplers.linear(angles[player_direction], angles[direction])
    )
    tdRotateAgent.start()
}
```

The second argument of `Animation.animate` - the linear animation `Animation.samplers.linear` function takes in the radian values of the current and targeted angles. Thus, the following `degreeToRadians` function converts the values.

```
function degreesToRadians(degrees) {
    let pi = Math.PI;
    return degrees * (pi / 180);
}
```

### c. Starting the Game

And that's it! Try starting the game and the pirate will both be transitioning between animations and rotating when moving from one tile to another!

## 6. Scaling It Up

Congratulations! You have picked up the necessary skills and concepts to develop your own puzzle filter. However, there is more that can be done to make the game more fun and exciting. If you are looking to take up the challenge, we have two tasks prepared for you.

> Note: At any time that you are stuck on these challenges, you can refer to our Pirate Dash 360 repository.

### a. Challenge 1: Creating Multiple Levels
To introduce a 360 degree experience in the game, one could opt to create multiple levels, surrounding the player in question. An illustration can be seen below:

[TODO: Add in different levels]

In order to facilitate multiple levels, you could use a JSON file to pre-customise the setups of the different levels.

Additionally, you can add instructions and directional signs to navigate the player from one level to another.

### b. Challenge 2: Adding Multiple Worlds

For **Pirate Dash 360**, we implemented three different themes - Grass World, Snow World, Desert World - to vary the level of difficulty of the game.

<p align="center"><img src="img/6b.png" width="70%"/></p>

If you wish to add multiple themes as well, you can implement a native UI slider, reflecting different worlds and themes in the game. You can check out the [Native UI Slider Tutorial](https://sparkar.facebook.com/ar-studio/learn/tutorials/native-ui-slider/)  for more information. 

For a more immersive experience, try adding effects like snow and sandstorm with [particle systems](https://sparkar.facebook.com/ar-studio/learn/tutorials/adding-particle-systems/)!

## 7. Optional: Publishing the Filter 
1. Once you are ready for the filter to go live, click on **Upload and Export** on the leftmost panel.

<p align="center"><img src="img/7_1.png" width="70%"/></p>

2. The file size will be calculated and if it meets the requirement for Facebook (2 MB) and Instagram (4 MB), a green tick stating that it is Ready to Submit will appear. Click on **Export** to export the filter. Save the file on your local PC.

3. Once the file is saved, prepare a demo video (maximum 32 MB) that will help a user understand how the filter can be used. The video can be recorded when you start the preview on Spark AR Studio. Some tips on how to prepare the demo video can be found [here](https://sparkar.facebook.com/ar-studio/learn/publishing/demo-videos-for-instagram-effects/#demo-video-recommendations).

4. Also, prepare a mini icon that represents the filter (minimum 200 x 200 pixels).

5. Head to https://www.facebook.com/sparkarhub/ and log into your Facebook/Instagram account to access the Spark AR Hub dashboard. Click on **Publish an Effect** on the left panel.

<p align="center"><img src="img/7_2.png" width="70%"/></p>

6. Fill in a name for the effect, and upload the AR Project file you saved earlier. Choose the platform that you want to publish the effect to, and select the owner and Instagram account (if Instagram is selected) associated with this effect. You may also add up to 20 keywords that are related to the effect, so that other users can find your filter easily.

<p align="center"><img src="img/7_3.png" width="70%"/></p>

7. Once everything is filled up, hit on **Submit**!

<p align="center"><img src="img/7_4.png" width="70%"/></p>

And that’s it! You will receive a notification when your filter is approved. 

## 8. What's Next - Developing your own filter
The skills that you have picked up through our tutorial can be used to develop different applications such as: 
- Rush Hour or Unblock Me 
- Bejeweled or Candy Crush
- Otello
- Go
- Checkers

<p align="center"><img src="img/8.png" width="70%"/></p>

Or anything creative/new that you might think of, just like **Pirate Dash 360**!
> Note: Make sure to check for any copyright infringements before developing new versions of existing games.

## 9. References

