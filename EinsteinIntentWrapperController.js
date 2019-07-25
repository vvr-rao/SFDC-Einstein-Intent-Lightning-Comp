({
	getIntent1 : function(component, event, helper) {
		var rid = component.get("v.recordId");
		
        var action = component.get("c.getIntent");
        action.setParams({RecId : rid});

		var self = this;
		action.setCallback(this, function(actionResult) {
            	var state = actionResult.getState();
				if (component.isValid() && state === "SUCCESS") {
                    	component.set("v.Intent", actionResult.getReturnValue());
                    	
                }
            else if (state === "ERROR") {
                	var errors = response.getError();
					if (errors) {
                        	if (errors[0] && errors[0].message) {
                                console.log("Error message: " + errors[0].message);

                            }
                    }
                else {
                    console.log("Unknown Error");
                }
            }
        });
        $A.enqueueAction(action);

	},
    
    isRefreshed: function(component, event, helper) {
		location.reload();
    }
})