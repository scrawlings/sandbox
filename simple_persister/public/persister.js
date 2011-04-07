persister = {
  persist: function(domain, key, value, on_success) {
    var data = {};
    data[key] = value;
    new Ajax.Request('/persist/' + domain, {
      method: 'post',
      postBody: $H(data).toJSON(),
      onSuccess: on_success
    });
  },

  recover: function(domain, key, on_success) {
    new Ajax.Request('/persisted/' + domain + '/' + key, {
      method: 'get',
      onSuccess: function(transport) { on_success(transport.responseText.evalJSON()); }
    });
  }
}
