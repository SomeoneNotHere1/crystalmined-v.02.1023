const sellerf={
	sell(field,i){
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='item1.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=2
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
				floor[i-1].cooldown=0
			}
			else{
				floor[i-1].cooldown++
			}
		}
			
			
			
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='item1Big.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=20
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
			}
			else{
				floor[i-1].cooldown++	
			}
		}
			
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='blue.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=5
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2	
				}
			}
			else{
				floor[i-1].cooldown++
			}
		}
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='blueBig.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=27
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
			}
			else{
				floor[i-1].cooldown++	
			}
		}
			
			
			
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='red.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=10
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
			}
			else{
				floor[i-1].cooldown++	
			}
		}
		
			
			
			
			
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='redBig.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=35
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
			}
			else{
				floor[i-1].cooldown++	
			}
		}
			
			
			
			
			
			
			
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='purple.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=15
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
			}
			else{
				floor[i-1].cooldown++	
			}
		}

		if(floor[i-1] !=null && floor[i-1].overlayTexture=='purpleBig.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=40
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
			}
			else{
				floor[i-1].cooldown++	
			}
		}	
			
			
			
			
			
			
			
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='black.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=20
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(2>=susUp && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
			}
			else{
				floor[i-1].cooldown++	
			}
		}
			
			
			
			
			
			
			
			
		if(floor[i-1] !=null && floor[i-1].overlayTexture=='blackBig.png' && floor[i-1].texture=='convRight.png'){
			if(floor[i-1].cooldown>=40){
				gameInfo.money+=50
				floor[i-1].cooldown=0
				floor[i-1].overlayTexture=null
				var susUp = Math.floor(Math.random() * gameInfo.meterRiseChance);
				if(susUp=2 && gameInfo.susAmongusLevel<200){
					gameInfo.susAmongusLevel+= gameInfo.meterRise/2
				}
			}
			else{
				floor[i-1].cooldown++	
			}
		}
	},
}