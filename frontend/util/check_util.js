let authKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxMDE0NzViLWExNWYtNDA2OS1iODdiLTZmMThlZTgxZmNlZSIsIm5hbWUiOiJqdW5pb3IgIzEzIn0.Q1sjp9eoSGV2k3EU0-BylGYCgkqaXpT5Ti2CGbiVo98'

export const fetchChecks = () => (
  $.ajax({
    method: 'Get',
    url: 'https://check-api.herokuapp.com/checks',
    headers: {
      'Authorization': authKey,
    }
  })
)

export const createCheck = (tableId) => (
  $.ajax({
    method: 'Post',
    data:  JSON.stringify({
      'tableId' : tableId,
    }),
    url: 'https://check-api.herokuapp.com/checks',
    headers: {
      'Authorization': authKey,
    },
    dataType: 'json',
    contentType: "application/json",
    error: function(e){
        console.log(e)
    },

  })
)

export const fetchCheck = (id) => (
  $.ajax({
    method: 'Get',
    url: `https://check-api.herokuapp.com/checks/${id}`,
    headers: {
      'Authorization': authKey,
    }
  })
)

export const addItemOnCheck = (id, itemId) => (
  $.ajax({
    method: 'Put',
    data:  JSON.stringify({
      'itemId' : itemId,
    }),
    url: `https://check-api.herokuapp.com/checks/${id}/addItem`,
    headers: {
      'Authorization': authKey,
    },
    error: function(e){
        console.log(e)
    },
  })
)

export const voidItemOnCheck = (id, orderedItemId) => (
  $.ajax({
    method: 'Put',
    data:  JSON.stringify({
      'orderedItemId' : orderedItemId,
    }),
    url: `https://check-api.herokuapp.com/checks/${id}/voidItem`,
    headers: {
      'Authorization': authKey,
    },
    error: function(e){
        console.log(e)
    },
  })
)

export const closeCheck = (id) => (
  $.ajax({
    method: 'Put',
    data:  JSON.stringify({ }),
    url: `https://check-api.herokuapp.com/checks/${id}/close`,
    headers: {
      'Authorization': authKey,
    },
    error: function(e){
        console.log(e)
    },
  })
)

export const deleteChecks = () => (
  $.ajax({
    method: 'Delete',
    data:  JSON.stringify({ }),
    url: 'https://check-api.herokuapp.com/checks',
    headers: {
      'Authorization': authKey,
    },
    error: function(e){
        console.log(e)
    },
  })
)
