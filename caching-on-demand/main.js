import { EdgeKV } from './edgekv.js';

export async function onClientRequest(request) {
	var default_cachingFlag = 0;
	var cachingFlagFromEdgeKv = 0;
	var servicePath = request.path.split('/')[2];

	const edgeKv = new EdgeKV({namespace: "demo", group: "services"});

	try {
	cachingFlagFromEdgeKv = await edgeKv.getText({ item: servicePath, default_value: default_cachingFlag });
	} catch (error) {
	    }

	if (cachingFlagFromEdgeKv == 1){
		request.setVariable('PMUSER_CACHING_FLG',1);
        	}else{
		}
}
