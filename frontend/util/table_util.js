export const fetchTables = () => (
  $.ajax({
    method: 'Get',
    url: 'https://check-api.herokuapp.com/tables',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxMDE0NzViLWExNWYtNDA2OS1iODdiLTZmMThlZTgxZmNlZSIsIm5hbWUiOiJqdW5pb3IgIzEzIn0.Q1sjp9eoSGV2k3EU0-BylGYCgkqaXpT5Ti2CGbiVo98'
    }
  })
)
