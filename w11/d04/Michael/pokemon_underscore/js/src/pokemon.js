var pokemon = {

  pokemonList : allPokemon,

  printAllPokemonNamesToConsole : function(){
    _.each(this.pokemonList, function(pokemon){console.log(pokemon.name)
    }); 
  },


// Don't need the If Statement 
  findPokemonByName : function(name){
    var  pokemonFound = _.find(this.pokemonList, function(pokemon){
      if(pokemon.name === name){
        return pokemon;
      }
    });
      return pokemonFound
  },

  findStrongestPokemon : function(){
    var pokemonStrong = _.max(this.pokemonList, function(pokemon){
      return parseInt(pokemon.stats.attack)
    });
    return pokemonStrong
  },

  findPokemonByType : function(type){
    var pokemonType = _.filter(this.pokemonList, function(pokemon){
      return _.contains(pokemon.type,type) == true
      // return pokemon.type === type
    });
    return pokemonType
  },

  findAllTypes : function(){
    var pokemonType = _.pluck(this.pokemonList, 'type' )
    pokemonType = _.flatten(pokemonType)
    pokemonType = _.uniq(pokemonType)
    return pokemonType
  },

  totalStats : function(name){
    var foundPokemon = .find(pokemon.pokemonList, function(monster)
      return monster.name === name; 
    }); 
    return _.reduce(foundPokemon.stats, function(sum,stat,key){
      return sum + parseInt(stat); 
    }, 0);
}