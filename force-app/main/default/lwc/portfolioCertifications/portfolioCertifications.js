import { LightningElement, wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIELDS from '@salesforce/schema/Portfolio__c.Certifications__c'
export default class PortfolioCertifications extends LightningElement {

    Azurelogo = `${PortfolioAssets}/PortfolioAssets/microsoft-certified-azure-fundamentals.png`
    Devopslogo = `${PortfolioAssets}/PortfolioAssets/openhack-devops.png`
    NewHorizonlogo = `${PortfolioAssets}/PortfolioAssets/CodProg-Inter.png`

    @api recordId
    @wire(getRecord, {
        recordId:'$recordId',
        fields:[SF_CERT_FIELDS]
    })certsHandler({data, error}){
        if(data){
            console.log("certsHandler data", JSON.stringify(data))
        }
        if(error){
            console.error("certsHandler error", error)
        }
    }
}