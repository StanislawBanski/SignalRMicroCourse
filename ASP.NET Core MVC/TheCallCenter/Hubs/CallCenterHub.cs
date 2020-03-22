﻿using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using TheCallCenter.Data.Entities;

namespace TheCallCenter.Hubs
{
    public class CallCenterHub : Hub<ICallCenterHub>
    {
        public async Task NewCallReceived(Call newCall)
        {
            await Clients.Group("CallCenters").NewCallReceived(newCall);
        }

        public async Task JoinCallCenters()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "CallCenters");
        }
    }
}
