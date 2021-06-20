import { LightningElement,api} from 'lwc';

export default class SfLightningPath extends LightningElement {
    @api currentState = 'ecs_productDetails';
    @api steps;
    pathHandler(event)
    {
        this.currentState = event.currentTarget.value;
        this.dispatchEvent(new CustomEvent('selectedpath', {
            detail: this.currentState
          }));
    }
}