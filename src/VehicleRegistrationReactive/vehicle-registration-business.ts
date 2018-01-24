import {SharepointListsWebService,SharePointUserProfileWebService,SharePointUserProfile} from 'ng-tax-share-point-web-services-module';
import {VehicleRegistrationListItem} from './vehicle-registration-list-entry';
import {UserInfoListEntry} from 'ng-tax-share-point-web-services-module';
import {environment} from '../environments/environment';

export class VehicleRegistrationBusiness{

	constructor(private sharepointListsWebService: SharepointListsWebService, private sharepointUserProfileService:SharePointUserProfileWebService)
	{
		//tweaking vehicle registration's site URL.
		UserInfoListEntry.urlOfSubsite=environment.baseUrl.length>1?(environment.baseUrl+"/"):"/";
	}

	addOrUpdateListItem(keyValuePairs: [string, string][]):Promise<number>{
		return this.sharepointListsWebService.addOrUpdateListItem(new VehicleRegistrationListItem() , keyValuePairs);
	}
	
	loadItem(id:string):Promise<VehicleRegistrationListItem[]>{
		return this.sharepointListsWebService.getListItems(VehicleRegistrationListItem,["ID", id], null, null);
	}
	
	getUserProfile(accountName:string):Promise<SharePointUserProfile>{
		return this.sharepointUserProfileService.getUserProfileByName(accountName);
	}
	
}
