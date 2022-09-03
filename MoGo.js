function OpenPHOTODescript() {
    document.getElementById('PHOTOdescript').style.display = 'flex';
    document.getElementById('UArrow').style.display = 'flex';
    document.getElementById('DArrow').style.display = 'none';
   }
   function closePHOTOdescript() {
    document.getElementById('PHOTOdescript').style.display = 'none';
    document.getElementById('UArrow').style.display = 'none';
    document.getElementById('DArrow').style.display = 'flex';
   }


   function OpenCREATEDescript() {
    document.getElementById('CREATEUArrow').style.display = 'flex';
    document.getElementById('CREATEDArrow').style.display = 'none';
    document.getElementById('CREATIVEdescript').style.display = 'flex';
   }
   function closeCREATEdescript() {
    document.getElementById('CREATIVEdescript').style.display = 'none';
    document.getElementById('CREATEUArrow').style.display = 'none';
    document.getElementById('CREATEDArrow').style.display = 'flex';
   }


   function OpenWDDescript() {
    document.getElementById('WDdescript').style.display = 'flex';
    document.getElementById('WDUArrow').style.display = 'flex';
    document.getElementById('WDDArrow').style.display = 'none';ы
   }
   function closeWDdescript() {
    document.getElementById('WDdescript').style.display = 'none';
    document.getElementById('WDUArrow').style.display = 'none';
    document.getElementById('WDDArrow').style.display = 'flex';
   }


   function changeItem() {
    document.getElementById('FMembImg').style.background = '#95e1d3';
    document.getElementById('FMembImg__overlay').style.display = 'block';
    document.getElementById('FMembImg__overlay').style.zIndex = '9998';
    document.getElementById('FMembImg__overlay').style.bottom = '10px';
    document.getElementById('FMembImg__overlay').style.right = '10px';
  }
  function rechangeItem() {
    document.getElementById('FMembImg').style.background = "url('images/MATTHEW.jpg')";
    document.getElementById('FMembImg__overlay').style.display = 'none';
    document.getElementById('FMembImg__overlay').style.top = '0px';
    document.getElementById('FMembImg__overlay').style.left = '0px';
    document.getElementById('FMembImg__overlay').style.zIndex = '1';
  }
  