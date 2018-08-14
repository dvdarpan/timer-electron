def SolveCase(case_index, case):
  T, (tripsa, tripsb) = case
  trips = []
  for trip in tripsa:
    trips.append([trip[0], trip[1], 0])
  for trip in tripsb:
    trips.append([trip[0], trip[1], 1])

  trips.sort()

  start = [0, 0]
  trains = [[], []]

  for trip in trips:
    d = trip[2]
    if trains[d] and trains[d][0] <= trip[0]:
      # We're using the earliest train available, and
      # we have to delete it from this station's trains.
      heappop(trains[d])
    else:
      # No train was available for the current trip,
      # so we're adding one.
      start[d] += 1
    # We add an available train in the arriving station at the
    # time of arrival plus the turnaround time.
    heappush(trains[1 - d], trip[1] + T)

  print "Case #%d: %d %d" % (case_index, start[0], start[1])