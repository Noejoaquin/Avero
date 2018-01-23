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
