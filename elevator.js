/*jslint node: true */
'use strict';

module.exports = {
	goto : function(currentFloor,destination){
        var travel;
        if (typeof currentFloor != 'number' || typeof destination != 'string'){
            return 0;
        }
        if (currentFloor < 4 && destination < 4) {
            travel = destination - currentFloor;
            return travel;
        }
        else if(currentFloor < 3 || destination < 3){
            travel = 0;
            currentFloor = 0;
            return travel;
        }
        else if (currentFloor>destination) { 
            travel = currentFloor - destination;
            return travel;
        }
    }
};