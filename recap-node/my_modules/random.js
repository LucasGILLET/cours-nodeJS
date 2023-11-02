module.exports = {
	random: function(myArray) {
        if (Array.isArray(myArray) && myArray.length > 0) {
            return myArray[Math.floor(Math.random() * myArray.length)];
        }
        return null;
	},
};