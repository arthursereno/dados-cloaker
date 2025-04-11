window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      text: '4. 🐁 Cloaker',
      callback: function(t) {
        return t.card('id')
          .then(function(card) {
            const webhookUrl = `https://n8n.api-blogfeelgood.fun/webhook/criar-campanha-redtrack?cardId=${card.id}`;
            return fetch(webhookUrl, {
              method: 'GET'
            })
            .then(() => t.alert({ message: '✅ Dados do CLoaker Gerados!' }))
            .catch(() => t.alert({ message: '⏳ Gerando...' }));
          });
      }
    }];
  }
});
