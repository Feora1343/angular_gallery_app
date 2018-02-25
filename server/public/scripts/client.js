console.log('JS Sourced and Loaded!');

// I Learned about angular modules here
// I wanted to keep things easier to read
// https://www.w3schools.com/angular/angular_modules.asp
const app = angular.module('faerunApp', []);

app.controller('faerunController', ['$http', function($http) {
  console.log('Faerun Controller Loaded!');
  const self = this;

  // Here we create a toggle status for the
  // image descripton over the image.
  self.galleryToggle = false;
  // Storing objects within an array per requirements
  self.galleryImages = [
    // Lawful Good: Bahamut
    {
      godImage: 'images/lg_bahamut.png',
      godSymbol: 'images/lg_bahamut_symbol_100.png',
      godDescription: 'The Platinum God: The Dragon God of justice, good dragons, and wisdom.',
      godName: 'Bahamut',
      godAlignment: 'Lawful Good'
    },
    // Neutral Good: Lathander
    {
      godImage: 'images/ng_lathander.png',
      godSymbol: 'images/ng_lathander_symbol_100.png',
      godDescription: 'The Morninglord: God of the Dawn, creativity, vitality and youth.',
      godName: 'Lathander',
      godAlignment: 'Neutral Good'
    },
    // Chaotic Good: Sune
    {
      godImage: 'images/cg_sune.png',
      godSymbol: 'images/cg_sune_symbol_100.png',
      godDescription: 'Lady Firehair: Goddess of Beauty and Love.',
      godName: 'Sune',
      godAlignment: 'Chaotic Good'
    },
    // Lawful Neutral: Helm
    {
      godImage: 'images/ln_helm.png',
      godSymbol: 'images/ln_helm_symbol_100.png',
      godDescription: 'God of Guardians: The Vigiliant One, The Watcher, and The Great Guard.',
      godName: 'Helm',
      godAlignment: 'Lawful Neutral'
    },
    // True Neutral: Waukeen
    {
      godImage: 'images/tr_waukeen.png',
      godSymbol: 'images/tr_waukeen_symbol_100.png',
      godDescription: "The Merchant's Friend: Goddess of Commerece and the Golden Lady.",
      godName: 'Waukeen',
      godAlignment: 'True Neutral'
    },
    // Chaotic Neutral: Tempus
    {
      godImage: 'images/cn_tempus.png',
      godSymbol: 'images/cn_tempus_symbol_100.png',
      godDescription: 'Lord of Battles: God of war, honorable battle and glory in combat.',
      godName: 'Tempus',
      godAlignment: 'Chaotic Neutral'
    },
    // Lawful Evil: Bhaal
    {
      godImage: 'images/le_bhaal.png',
      godSymbol: 'images/le_bhaal_symbol_100.png',
      godDescription: 'The Lord of Murder: God of death, murder, violence and ritual sacrifice.',
      godName: 'Bhaal',
      godAlignment: 'Lawful Evil'
    },
    // Neutral Evil: Shar
    {
      godImage: "images/ne_shar.png",
      godSymbol: 'images/ne_shar_symbol_100.png',
      godDescription: 'The Mistress of the Night: Goddess of darkness, secrets and The Underdark.',
      godName: 'Shar',
      godAlignment: 'Neutral Evil'
    },
    // Chaotic Evil: Malar
    {
      godImage: 'images/ce_malar.png',
      godSymbol: 'images/ce_malar_symbol_100.png',
      godDescription: 'The Beastlord: God of the Hunt, evil lycanthropes, bestial savagery and bloodlust.',
      godName: 'Malar',
      godAlignment: 'Chaotic Evil'
    }
  ]
}]);

app.controller('followersController', ['$http', function(http){
  console.log('Followers Controller loaded!');
  const self = this;

  // This sets the rating counter to 0 upon loading webpage.
  self.followerCount = 0;

  // This increases the counter by 1 each time it is clicked.
  self.increaseFollowers = function() {
      self.followerCount += 1;
      return self.followerCount;
    }
}]);