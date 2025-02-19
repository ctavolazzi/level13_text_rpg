define(['ash', 'game/vos/ResourcesVO'], function (Ash, ResourcesVO) {

	var IncomingCaravanVO = Ash.Class.extend({

		name: "",
		sellItems: [],
		sellResources: null,
		buyItemTypes: [],
		buyResources: [],
		usesCurrency: false,
		currency: 0,

		tradesMade: 0,

		traderSelectedItems: {}, // id -> amount
		traderSelectedResources: null,
		traderSelectedCurrency: 0,
		campSelectedItems: {}, // id -> amount
		campSelectedResources: null,
		campSelectedCurrency: 0,

		traderOfferValue: 0,
		campOfferValue: 0,

		constructor: function (name, sellItems, sellResources, buyItemTypes, buyResources, usesCurrency, currency) {
			this.name = name;
			this.sellItems = sellItems ? sellItems : [];
			this.sellResources = sellResources ? sellResources : new ResourcesVO(storageTypes.DEFINITION);
			this.buyItemTypes = buyItemTypes ? buyItemTypes : [];
			this.buyResources = buyResources ? buyResources : [];
			this.usesCurrency = usesCurrency ? usesCurrency : false;
			this.currency = currency ? currency : 0;

			this.tradesMade = 0;

			this.clearSelection();
		},

		clearSelection: function () {
			this.traderSelectedItems = {};
			this.traderSelectedResources = new ResourcesVO(storageTypes.RESULT);
			this.traderSelectedCurrency = 0;
			this.campSelectedItems = {};
			this.campSelectedResources = new ResourcesVO(storageTypes.RESULT);
			this.campSelectedCurrency = 0;
		},
		
		getSellItemCount: function (itemID) {
			let result = 0;
			for (let i = 0; i < this.sellItems.length; i++) {
				if (this.sellItems[i].id == itemID) result++;
			}
			return result;
		},
	});

	return IncomingCaravanVO;
});
