import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    @api objectApiName

    downloadResume(){
        window.open("https://github.com/Yaridg/euridd-resume/raw/main/Euridd's%20Resume%20Salesforce%20Developer.pdf","_blank")
    }
}