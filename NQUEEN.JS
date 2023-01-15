var txt1;
var btn1;

var board = [[]];
windows.download = function()
{
    txt1= document.getElementById('txt1')
    btn1= document.getElementById('btn1')
     for(var i = 0; i<100 ; i++)
     {
        for(var j=0 ; j<100 ; j++)
        {
            board[i][j]=0;
        }
     }

}
function btnClick()
    {
        var start=0,end=0;
        for(var n=4; n<32; n*=2)
        {
            var ans;
            for(var t=0;t<avgTimes; t++);
            start = performance.now();
            ans=nQueen
            end=performance.now();
        }
        txt1.value+=""+n+", "+sumTime/avgTimes;
    
    }
    function isSafe(brd,x,y,n){

        for(var i = 0; i < y; i++){
    
            if(brd[x][i]==1) return false;
    
        }
    
        for(var i=x-1,j=y-1;(i>0&&j>0);i--,j--){
    
            if(brd[i][j]==1) return	false;
    
        }
    
        for(var i=x-1,j=y+1;(i>0&&j<n);i--,j++){
    
            if(brd[i][j]==1) return	false;
    
        }
    
        return true
    
    }
    
    
    
    function nQueen(brd,n,y){
    
        if(y==n) return true;
    
        else{
    
            for(var i=0;i<n;i++){
    
                if(isSafe(brd,i,y,n)){
    
                    brd[i][y]=1;
    
                    if(nQueen(brd,n,y+1))
    
                        return true;
    
                    else
    
                        brd[i][y]=0;
    
                }
    
            }
    
            return false;
    
        }//end else
    
    }
